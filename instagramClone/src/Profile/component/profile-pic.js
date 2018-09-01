import React from "react";
import {
  View
} from 'react-native';
import {
  Text,
  Button,
  Thumbnail
} from "native-base"

const ProfilePic = () => (
	<View style={{marginTop:30, flexDirection:"row"}}>
		<View>
			<Thumbnail 
				large 
				source={{uri: "https://tracker.moodle.org/secure/attachment/30912/f3.png"}} 
				style={{borderColor:"#eee", borderWidth:2, left:15}}
			/>
		</View>
		<View style={{marginLeft: 40}}>
			<View style={{flexDirection:"row"}}>
				<View style={{alignItems:"center", marginRight:30}}>
					<Text style={{color:"#000", fontWeight:"900", fontSize:20}}>14</Text>
					<Text style={{color:"#aaa", fontSize:15}}>posts</Text>
				</View>
				<View style={{alignItems:"center", marginRight:20}}>
					<Text style={{color:"#000", fontWeight:"900", fontSize:20}}>143</Text>
					<Text style={{color:"#aaa", fontSize:15}}>followers</Text>
				</View>
				<View style={{alignItems:"center"}}>
					<Text style={{color:"#000", fontWeight:"900", fontSize:20}}>268</Text>
					<Text style={{color:"#aaa", fontSize:15}}>following</Text>
				</View>
			</View>

			<View>
				<Button block small light style={{marginTop:20, backgroundColor : "#fff"}}>
					<Text>Edit Profile</Text>
				</Button>
			</View>
		</View>
	</View>
)

export default ProfilePic