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
    	<View style={{width:"100%", alignItems:"center", right:22}}>
			<Thumbnail 
				small 
				source={{uri: 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png'}}
				style={{borderColor:"#ccc", borderWidth:2}}
			/>
	    	<Text style={{fontSize:12}}>{item.name}</Text>
    	</View>
    )
}


export default HeaderTitle