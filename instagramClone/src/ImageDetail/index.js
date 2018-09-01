import React, {Component} from 'react';
import { View, TouchableOpacity, Image } from "react-native"
import {
  Container,
  Text,
  Card,
  CardItem,
  Left,
  Body,
  Form,
  Input,
  Icon,
  Right,
  Item,
  Thumbnail
} from "native-base"

import {connect} from "react-redux"

const ImageDetail = ({profile, navigation}) => {
	const {id} = navigation.state.params;

	const item = profile.profileList.filter((obj) => {
		return obj.id == id
	})

	return (
	<Container>
		<View style={{marginBottom:10, width: "100%", backgroundColor:"#fff"}}>
			<Card transparent>
				<CardItem header bordered>
					<Left>
						<Thumbnail 
							small 
							source={{uri: 'https://tracker.moodle.org/secure/attachment/30912/f3.png'}}
							style={{borderColor:"#ccc", borderWidth:2, right:8}}
						/>
						<Body>
							<Text style={{color:"#000", right:5, fontSize:15, fontWeight:'900'}}>Bee Wijaya</Text>
						</Body>
					</Left>
				</CardItem>

				<CardItem cardBody>
					<Image 
					source={{uri: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=350'}} 
					style={{height: 200, width: "100%", flex: 1}}/>
				</CardItem>

				<CardItem footer>
					<Body>
						<View style={{flexDirection : "row", right:8}}>
							<TouchableOpacity style={{marginRight:20}}>
							  <Icon name="ios-heart-outline" style={{fontSize:32}}/>
							</TouchableOpacity>
							<TouchableOpacity>
							  <Icon name="ios-chatbubbles-outline" style={{fontSize:32, marginRight:20}}/>
							</TouchableOpacity>
							<TouchableOpacity>
						  		<Icon name="ios-send-outline" style={{fontSize:32}}/>
							</TouchableOpacity>
						</View>
					</Body>
					<Right>
						<TouchableOpacity>
						  <Icon name="ios-bookmark-outline" style={{fontSize:32, color:"#000"}}/>
						</TouchableOpacity>
					</Right>
				</CardItem>
			</Card>

			<View style={{left:12, marginRight:12}}>
				<Text style={{fontSize:15, fontWeight:'900'}}>Bee Wijaya</Text>
				<Text style={{fontSize:13, color:"#aaa"}}>{item[0].body}</Text>
			</View>

			<View style={{right:3}}>
				<Form>
					<Item style={{marginRight:20}}>
						<Input 
						style={{fontSize:13, height:40, color:"#aaa"}} 
						placeholder="Add a comment"
						/>
					</Item>
				</Form>
			</View>

			<View style={{marginTop : 10, left:12}}>
				<Text style={{fontSize:12,  color:"#aaa"}}>30 August 2018</Text>
			</View>
		</View>
	</Container>
	)
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(ImageDetail)