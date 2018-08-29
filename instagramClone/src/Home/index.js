import React, {Component} from 'react';
import {Platform, StyleSheet, View, FlatList} from 'react-native';
import {
  Container,
  Text,
  List
} from "native-base"
import {connect} from "react-redux"

import {HeaderLeft, HeaderTitle, HeaderRight} from "./component/header-title.js"
import {getFeed} from "../store/actions/feed.js"
class Home extends Component{
  static navigationOptions = {
  	headerLeft : <HeaderLeft />,
    headerTitle: <HeaderTitle />,
    headerRight : <HeaderRight />,
  };

  getFeed = () => {
    this.props.dispatch(getFeed())
  }

  componentDidMount(){
    this.getFeed()
  }


  render() {
    return (
      <Container>
       
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