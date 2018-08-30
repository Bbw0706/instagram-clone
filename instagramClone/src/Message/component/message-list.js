import React, { Component } from 'react';
import { 
  ListItem, 
  Left, 
  Body, 
  Right, 
  Thumbnail, 
  Text 
} from 'native-base';

const MessageList = ({item, navigation}) => (
  <ListItem 
    avatar 
    style={{marginRight:20}}
    onPress={() => navigation.navigate("MessageDetail", {item})}
  >
    <Left>
      <Thumbnail 
        small 
        source={{uri: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png'}}
        style={{borderColor:"#ccc", borderWidth:2}}
      />
    </Left>
    <Body>
      <Text>{item.name}</Text>
      <Text note>Doing what you like will always keep you happy . .</Text>
    </Body>
  </ListItem>
)

export default MessageList