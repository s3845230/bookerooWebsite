import axios from "axios";

export const createBook = (newBook, history) => async dispatch => {
	try {
		const response = await axios.post("http://localhost/8080/api/book/new/", newBook);
		console.log(response);
		const { bookID } = response.data;
		console.log(bookID);
		history.push(`/searchResults/${bookID}`);
	}
	catch (err) {
		console.log(err)
	}
}
