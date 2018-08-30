import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  View, 
  StatusBar,
  FlatList
} from 'react-native';

import {
  Container,
  Text,
  List,
  Spinner,
  Content
} from "native-base"

import {
  connect
} from "react-redux"

import {
  HeaderLeft, 
  HeaderTitle, 
  HeaderRight
} from "./component/header-title.js"

import {
  getFeed
} from "../store/actions/feed.js"

import FeedList from "./component/feed-list.js"

class Home extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft : <HeaderLeft />,
      headerTitle: <HeaderTitle />,
      headerRight : <HeaderRight navigation={navigation}/>,
    };
  };

  getFeed = () => {
    this.props.dispatch(getFeed())
  }

  componentDidMount(){
    this.getFeed()
  }


  render() {
    const {feedList, loading} = this.props.feed;

    let isAnyFeed = null

    if(loading){
       isAnyFeed = <Spinner color="#000"/>
    }

    return (
      <Container>
        <StatusBar
           backgroundColor="#eee"
           barStyle="dark-content"
        />
       <View>
          {isAnyFeed}

          <FlatList
            data={feedList}
            renderItem={({item}) => <FeedList item={item}/>}
            keyExtractor={(item, index) => item.id.toString()}
          />
       </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    feed: state.feed
  }
}

export default connect(mapStateToProps)(Home)