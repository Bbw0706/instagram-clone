const initialState = {
	feedList : [],
	loading : false,
	error : ""
}

const feed = (state = initialState, action) => {
	switch(action.type){
		case "GET_FEED_PENDING" :
			return {
				...state,
				loading : true
			}

		case "GET_FEED_FULFILLED" : 
			return {
				...state,
				feedList : state.feedList.concat(action.payload.data),
				loading : false
			}

		case "GET_FEED_REJECTED" : 
			return {
				...state,
				loading : false,
				error : "Something err"
			}

		default : 
			return state
	}
}

export default feed;