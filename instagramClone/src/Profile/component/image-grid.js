import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image
} from "react-native"
import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Body, 
  Text,
  Left,
  Right,
  Thumbnail,
  Icon,
  Button,
  Form, 
  Item, 
  Input, 
  Label
} from 'native-base';

const ImageGrid = ({item, navigation}) => (
  <View style={{flexDirection:"row"}}>
    <TouchableOpacity style={{width:"33%"}} onPress={() => navigation.navigate("ImageDetail", {id : item.id})}>
      <Card transparent>
          <CardItem cardBody>
            <Image 
            source={{uri: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=350'}} 
            style={{height: 200, width: "100%", flex: 1}}/>
          </CardItem>
      </Card>
    </TouchableOpacity>

    <TouchableOpacity style={{width:"33%"}} onPress={() => navigation.navigate("ImageDetail", {id : item.id})}>
      <Card transparent>
          <CardItem cardBody>
            <Image 
            source={{uri: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=350'}} 
            style={{height: 200, width: "100%", flex: 1}}/>
          </CardItem>
      </Card>
    </TouchableOpacity>

    <TouchableOpacity style={{width:"33%"}} onPress={() => navigation.navigate("ImageDetail", {id : item.id})}>
      <Card transparent>
          <CardItem cardBody>
            <Image 
            source={{uri: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=350'}} 
            style={{height: 200, width: "100%", flex: 1}}/>
          </CardItem>
      </Card>
    </TouchableOpacity>
  </View>
)

export default ImageGrid