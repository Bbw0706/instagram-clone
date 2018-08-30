import axios from "axios"

const getMessage = () => {
	return {
		type : "GET_MESSAGE",
		payload : axios.get("https://jsonplaceholder.typicode.com/users")
	}
}

export {
	getMessage
}