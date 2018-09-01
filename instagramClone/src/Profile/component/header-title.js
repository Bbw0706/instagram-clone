import React from "react";
import {
	View,
	TouchableOpacity
} from "react-native"
import {
	Text,
	Icon
} from "native-base"

const HeaderLeft = () => (
	<Text style={{fontWeight:'900', marginLeft:15, fontSize:20}}>bee_wijaya</Text>
)

const HeaderRight = () => (
	<View style={{marginRight:15, flexDirection : "row"}}>
		<TouchableOpacity style={{marginRight:20}}>
			<Icon name="ios-timer-outline" style={{fontSize:32}}/>
		</TouchableOpacity>
		<TouchableOpacity>
			<Icon name="ios-menu" style={{fontSize:32}}/>
		</TouchableOpacity>
	</View>
)

export {
	HeaderRight,
	HeaderLeft
}