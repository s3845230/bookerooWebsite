import axios from "axios";

export const createBook = (newBook, history) => async dispatch => {
	try {
		const response = await axios.post("http://localhost:8081/api/book/new/", newBook);
		console.log(response);
		const { id } = response.data;
		console.log(id);
		history.push(`/searchResults/${id}`);
	}
	catch (err) {
		console.log(err)
	}
}
