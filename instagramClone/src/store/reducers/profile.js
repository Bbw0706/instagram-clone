const initialState = {
	profileList : [],
	loading : false,
	error : ""
}

const profile = (state = initialState, action) => {
	switch(action.type){
		case "GET_PROFILE_PENDING" :
			return {
				...state,
				loading : true
			}

		case "GET_PROFILE_FULFILLED" : 
			return {
				...state,
				profileList : state.profileList.concat(action.payload.data),
				loading : false
			}

		case "GET_PROFILE_REJECTED" : 
			return {
				...state,
				loading : false,
				error : "Something err"
			}

		default : 
			return state
	}
}

export default profile;