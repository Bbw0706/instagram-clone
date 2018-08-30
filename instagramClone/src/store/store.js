import {createStore, combineReducers, applyMiddleware} from "redux";
import middlewares from "./middlewares.js"
import feed from './reducers/feed.js'
import message from './reducers/message.js'

const RootReducer = combineReducers({
	feed,
	message
})

const store = () => {
	return createStore(
		RootReducer,
		applyMiddleware(...middlewares)
	)
}


export default store
