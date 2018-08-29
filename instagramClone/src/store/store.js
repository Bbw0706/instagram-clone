import {createStore, combineReducers, applyMiddleware} from "redux";
import middlewares from "./middlewares.js"
import feed from './reducers/feed.js'

const RootReducer = combineReducers({
	feed
})

const store = () => {
	return createStore(
		RootReducer,
		applyMiddleware(...middlewares)
	)
}


export default store
