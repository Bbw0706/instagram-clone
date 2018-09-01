import React, { Component } from 'react';
import { List, ListItem, Text, Body } from 'native-base';

const ProfileDetail = () => (
  <List style={{marginTop:20}}>
    <ListItem style={{right:10}}>
      <Body>
        <Text>Bee Wijaya</Text>
        <Text note>Instagram Cloning</Text>
      </Body>
    </ListItem>
  </List>
)

export default ProfileDetail