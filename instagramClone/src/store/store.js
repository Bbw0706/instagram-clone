import {createStore, combineReducers, applyMiddleware} from "redux";
import middlewares from "./middlewares.js"
import feed from './reducers/feed.js'
import message from './reducers/message.js'
import profile from './reducers/profile.js'

const RootReducer = combineReducers({
	feed,
	message,
	profile
})

const store = () => {
	return createStore(
		RootReducer,
		applyMiddleware(...middlewares)
	)
}


export default store
