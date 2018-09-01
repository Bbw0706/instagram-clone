import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator} from "react-navigation"
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../Home/index.js"
import ProfileScreen from "../Profile/index.js"
import AddPostScreen from "../AddPost/index.js"
import MessageScreen from "../Message/index.js"
import MessageDetailScreen from "../MessageDetail/index.js"
import ImageDetailScreen from "../ImageDetail/index.js"

const HomeStack = createStackNavigator(
	{
		Home : HomeScreen,
		Message : MessageScreen,
		MessageDetail : MessageDetailScreen
	},
	{
    	initialRouteName: 'Home',
	    /* The header config from HomeScreen is now here */
	    navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#fff',
	      },
	      headerTintColor: '#000',
	    },
	}
)

HomeStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === 'Message') {
    navigationOptions.tabBarVisible = false;
  } else if (routeName === 'MessageDetail') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

const ProfileStack = createStackNavigator(
	{
		Profile : ProfileScreen,
		ImageDetail : ImageDetailScreen
	},
	{
    	initialRouteName: 'Profile',
	    /* The header config from HomeScreen is now here */
	    navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#fff',
	      },
	      headerTintColor: '#000',
	    },
	}
)

const AddPostStack = createStackNavigator(
	{
		AddPost : AddPostScreen
	},
	{
    	initialRouteName: 'AddPost',
	    /* The header config from HomeScreen is now here */
	    navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#fff',
	      },
	      headerTintColor: '#000',
	    },
	}
)


const RootStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    AddPost: AddPostStack,
    Profile: ProfileStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'AddPost') {
          iconName = `ios-add-circle`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={28} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      style: {
	    backgroundColor: '#fff',
	  },
      showLabel : false,
      activeTintColor: '#000',
      inactiveTintColor: '#000'
    },
  }
);

export default RootStack