import axios from "axios"

const getFeed = () => {
	return {
		type : "GET_FEED",
		payload : axios.get("https://jsonplaceholder.typicode.com/posts")
	}
}

export {
	getFeed
}