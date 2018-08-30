import React, { Component } from 'react';
import {TouchableOpacity} from "react-native"
import { 
  Footer, 
  FooterTab,
  Button, 
  Icon, 
  Text,
  Left,
  Body,
  Right,
  Input,
  Item
} from 'native-base';


const Footers = () => (
  <Footer>
    <FooterTab style={{backgroundColor:"#fff"}}>
      <Left style={{marginRight:0, left:5}}>
        <TouchableOpacity
          style={{
            backgroundColor:"#fff", 
            height:40, 
            width:40, 
            borderRadius:40/2, 
            borderWidth:2, 
            borderColor:"#0099ff"
          }}
        >
           <Icon name='ios-camera' style={{color:"#0099ff", left:7, top:3}}/>
        </TouchableOpacity>
      </Left>
      <Body style={{right: 70}}>
        <Item style={{height:40,backgroundColor:"#fff", width:300}} rounded>
          <Input placeholder='Send A Message'/>

          <TouchableOpacity>
            <Icon name="ios-images-outline" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="ios-heart-outline" />
          </TouchableOpacity>
        </Item>
      </Body>
    </FooterTab>
  </Footer>
)

export default Footers