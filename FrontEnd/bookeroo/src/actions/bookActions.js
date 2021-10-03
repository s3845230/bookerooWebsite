import axios from "axios";
import { GET_ERRORS, GET_ALL_BOOKS, GET_BOOKS } from "./types";
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

export const updateBook = (book, history) => async dispatch => {
    try {
        await axios.put("http://localhost:8080/api/book/updateBook/", book,{ headers: authHeader() });
        // const response = await axios.put("http://localhost:8080/api/book/updateBook/", book,{ headers: authHeader() });
        // console.log(response);
        // const { id } = book.id;
        // console.log(id);
        // history.push(`/searchResults/${id}`);
    }
    catch (err) {
        console.log(err)
    }
}

export const getAllBooks = (history) => async dispatch => {
    const response = await axios.get(`http://localhost:8080/api/book/search`);
    history.push("/searchResults");
    dispatch({
      type: GET_ALL_BOOKS,
      payload: response.data
    });
};

