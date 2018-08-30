import React, {Component} from 'react';
import {
	FlatList, 
	View
} from 'react-native';

import {
  connect
} from "react-redux"

import {
  Container,
  Content,
  Spinner,
  List
} from "native-base"

import {
  getMessage
} from "../store/actions/message.js"

import Footers from "./component/footers.js"
import SearchBar from "./component/search-bar.js"
import MessageList from "./component/message-list.js"

class Message extends Component{

  getMessage = () => {
    this.props.dispatch(getMessage())
  }

  componentDidMount(){
    this.getMessage()
  }

  render() { 
  	const {loading, messageList} = this.props.message;

    let isAnyMessage = null

    if(loading){
       isAnyMessage = <Spinner color="#000"/>
    }

    return (
      <Container>
        <Content>
			<SearchBar />

			{isAnyMessage}

			<List>
				<FlatList 
					data={messageList}
		            renderItem={({item}) => <MessageList item={item} navigation={this.props.navigation}/>}
		            keyExtractor={(item, index) => item.id.toString()}
				/>
			</List>
        </Content>
        <Footers />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(Message)