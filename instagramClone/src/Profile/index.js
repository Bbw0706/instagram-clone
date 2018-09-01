import React, {Component} from 'react';
import { View, FlatList } from 'react-native';
import {
  Container,
  Tab, 
  Tabs,
  Content,
  Spinner,
  Text,
  TabHeading,
  Icon
} from "native-base"

import {
	HeaderRight,
	HeaderLeft
} from "./component/header-title.js"

import {
  connect
} from "react-redux"

import {
  getProfile
} from "../store/actions/profile.js"

import ProfilePic from "./component/profile-pic.js"
import ProfileDetail from "./component/profile-detail.js"
import ImageDetail from "./component/image-detail.js"
import ImageGrid from "./component/image-grid.js"

class Profile extends Component{
	static navigationOptions = ({ navigation }) => {
		return {
		  headerLeft : <HeaderLeft />, 
		  headerRight :  <HeaderRight />
		};
	};

	getProfile = () => {
		this.props.dispatch(getProfile())
	}

	componentDidMount(){
		this.getProfile()
	}

	render() {
		const {profileList, loading} = this.props.profile;

	    let isAnyImage = null

	    if(loading){
	       isAnyImage = <Spinner color="#000"/>
	    } else if(profileList.length < 1) {
	    	isAnyImage = <Text style={{alignSelf:"center"}}>You haven't post any photo</Text>
	    }

		return (
		  <Container>
		    <Content>
				<ProfilePic />
				<ProfileDetail />
				<Tabs>
		          <Tab heading = "Wall"
		        	tabStyle={{backgroundColor: '#fff'}} 
		        	textStyle={{color: '#ccc'}} 
		        	activeTabStyle={{backgroundColor: '#fff'}} 
		        	activeTextStyle={{color: '#0099ff', fontWeight: 'normal'}}
	              >
	              	{isAnyImage}
					<FlatList 
						data={profileList}
			            renderItem={({item}) => <ImageGrid navigation={this.props.navigation} item={item}/>}
			            keyExtractor={(item, index) => item.id.toString()}
					/>
		          </Tab>

		          <Tab heading = "Feed"
		        	tabStyle={{backgroundColor: '#fff'}} 
		        	textStyle={{color: '#ccc'}} 
		        	activeTabStyle={{backgroundColor: '#fff'}} 
		        	activeTextStyle={{color: '#0099ff', fontWeight: 'normal'}}
	              >
	              	{isAnyImage}
					<FlatList 
						data={profileList}
			            renderItem={({item}) => <ImageDetail item={item}/>}
			            keyExtractor={(item, index) => item.id.toString()}
					/>
		          </Tab>
		        </Tabs>
		    </Content>
		  </Container>
		);
	}
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(Profile)