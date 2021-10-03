import axios from "axios";
import authHeader from "../services/authHeader";

export const createBook = (newBook, history) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:8080/api/book/new/", newBook,{ headers: authHeader() });
        console.log(response);
        const { id } = response.data;
        console.log(id);
        history.push(`/searchResults/${id}`);
    }
    catch (err) {
        console.log(err)
    }
}
