import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Text,
  Icon
} from "native-base"

import {Fonts} from "../../Utils/utils.js"


const HeaderLeft = () => (
	<TouchableOpacity style={{marginLeft:10}}>
		<Icon name="camera"/>
	</TouchableOpacity>
)

const HeaderTitle = () => (
	<Text style={{fontFamily : Fonts.Lobster, fontSize : 25, top : 3}}>
		Instagram
	</Text>
)

const HeaderRight = () => (
	<TouchableOpacity style={{marginRight:10}}>
		<Icon name="send"/>
	</TouchableOpacity>
)

export {
	HeaderRight,
	HeaderTitle,
	HeaderLeft
}