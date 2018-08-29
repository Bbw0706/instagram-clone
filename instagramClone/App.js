import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from "react-redux"
import store from "./src/store/store.js"
import RootStack from "./src/Navigator/index.js"

const configureStore = store()

const App = () => (
	<Provider store={configureStore}>
	  <RootStack />
	</Provider>
)


export default App