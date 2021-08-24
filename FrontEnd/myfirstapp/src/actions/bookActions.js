import axios from "axios";
import { GET_ERRORS, GET_PERSONS, GET_PERSON } from "./types";

export const createBook = (book, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/book", book);
        history.push("/uploadBook");
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};