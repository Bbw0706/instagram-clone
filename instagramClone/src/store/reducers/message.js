const initialState = {
	messageList : [],
	loading : false,
	error : ""
}

const message = (state = initialState, action) => {
	switch(action.type){
		case "GET_MESSAGE_PENDING" :
			return {
				...state,
				loading : true
			}

		case "GET_MESSAGE_FULFILLED" : 
			return {
				...state,
				messageList : state.messageList.concat(action.payload.data),
				loading : false
			}

		case "GET_MESSAGE_REJECTED" : 
			return {
				...state,
				loading : false,
				error : "Something err"
			}

		default : 
			return state
	}
}

export default message;