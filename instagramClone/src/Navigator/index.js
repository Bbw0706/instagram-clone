import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator} from "react-navigation"
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../Home/index.js"
import ProfileScreen from "../Profile/index.js"
import FavouriteScreen from "../Favourite/index.js"

const HomeStack = createStackNavigator(
	{
		Home : HomeScreen
	},
	{
    	initialRouteName: 'Home',
	    /* The header config from HomeScreen is now here */
	    navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#fff',
	      },
	      headerTintColor: '#000',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	      },
	    },
	}
)

const ProfileStack = createStackNavigator(
	{
		Profile : ProfileScreen
	},
	{
    	initialRouteName: 'Profile',
	    /* The header config from HomeScreen is now here */
	    navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#fff',
	      },
	      headerTintColor: '#000',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	      },
	    },
	}
)

const FavouriteStack = createStackNavigator(
	{
		Favourite : FavouriteScreen
	},
	{
    	initialRouteName: 'Favourite',
	    /* The header config from HomeScreen is now here */
	    navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#fff',
	      },
	      headerTintColor: '#000',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	      },
	    },
	}
)


const RootStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Favourite: FavouriteStack,
    Profile: ProfileStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Favourite') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={28} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel : false,
      activeTintColor: '#000',
      inactiveTintColor: '#000'
    },
  }
);

export default RootStack