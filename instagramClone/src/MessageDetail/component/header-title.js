import React from "react"
import {
	View
} from "react-native"

import {
	Text,
	Thumbnail
} from "native-base"

const HeaderTitle = ({navigation}) => {
	const {item} = navigation.state.params
    return (
    	<View>
			<Thumbnail 
				small 
				source={{uri: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png'}}
				style={{borderColor:"#ccc", left:113, borderWidth:2}}
			/>
	    	<Text style={{fontSize:12, left:90}}>{item.name}</Text>
    	</View>
    )
}


export default HeaderTitle