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
				source={{uri: 'https://tracker.moodle.org/secure/attachment/30912/f3.png'}}
				style={{borderColor:"#ccc", borderWidth:2}}
			/>
	    	<Text style={{fontSize:12}}>{item.name}</Text>
    	</View>
    )
}


export default HeaderTitle