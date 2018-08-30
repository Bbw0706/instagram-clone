import React, { Component } from 'react';
import {TouchableOpacity} from "react-native"
import { 
  Container,
  Content
} from 'native-base';
import {connect} from 'react-redux'

import Footers from "./component/footers.js"
import HeaderTitle from "./component/header-title.js"

class MessageDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderTitle navigation={navigation}/>
    };
  };

  render() {
    return (
      <Container>
        <Content />
        
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

export default connect(mapStateToProps)(MessageDetail)
