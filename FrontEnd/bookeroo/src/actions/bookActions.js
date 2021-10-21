import axios from "axios";
import authHeader from "../services/authHeader";
import {GET_ALL_BOOKS} from "./types";
import {AUTHMICROSERVICE_IP} from "../constants";

export const createBook = (newBook, history) => async dispatch => {
    try {
        const response = await axios.post(AUTHMICROSERVICE_IP + "/api/book/new/", newBook,{ headers: authHeader() });
        console.log(response);
        const { id } = response.data;
        console.log(id);
        history.push(`/searchResults/${id}`);
    }
    catch (err) {
        console.log(err)
    }
}

export const getAllBooks = (history) => async dispatch => {
    const response = await axios.get(AUTHMICROSERVICE_IP + "/api/book/search");
    history.push("/searchResults");
    dispatch({
      type: GET_ALL_BOOKS,
      payload: response.data
    });
};

export const updateBook = (updatedBook, history) => async => {
    try {
        axios.put(AUTHMICROSERVICE_IP + "/api/book/update", updatedBook, { headers: authHeader() });
        history.push(`/admin`);
    }
    catch (err) {
        console.log(err)
    }
};
