import axios from "axios"

const getProfile = () => {
	return {
		type : "GET_PROFILE",
		payload : axios.get("https://jsonplaceholder.typicode.com/posts")
	}
}

export {
	getProfile
}