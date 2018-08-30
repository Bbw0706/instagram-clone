import React from "react";
import {
  Item,
  Icon,
  Input,
} from "native-base"

const SearchBar = () => (
	<Item style={{marginLeft:20, marginRight:20}}>
		<Icon name="ios-search" style={{color:"#aaa"}}/>
		<Input placeholder="Search" style={{color:"#aaa"}}/>
	</Item>
)

export default SearchBar