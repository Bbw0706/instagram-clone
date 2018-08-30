import React, { Component } from 'react';
import { 
  Footer, 
  FooterTab, 
  Button, 
  Icon, 
  Text 
} from 'native-base';

export default class Footers extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor:"#fff", borderTopWidth:2, borderColor:"#eee"}}>
          <Button vertical style={{backgroundColor:"#fff"}}>
            <Icon name="ios-camera" style={{color:"#0099ff"}}/>
            <Text style={{color:"#0099ff"}}>Camera</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}