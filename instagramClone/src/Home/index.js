import React, {Component} from 'react';
import {Platform, StyleSheet, View, FlatList} from 'react-native';
import {
  Container,
  Text,
  List
} from "native-base"

import {HeaderLeft, HeaderTitle, HeaderRight} from "./component/header-title.js"

export default class Home extends Component{
  static navigationOptions = {
  	headerLeft : <HeaderLeft />,
    headerTitle: <HeaderTitle />,
    headerRight : <HeaderRight />,
  };

  render() {
    return (
      <Container>
       
      </Container>
    );
  }
}
