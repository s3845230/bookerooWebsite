import {ADD_BOOK} from "./types";
import axios from 'axios';

const apiURL = "http://localhost:8000/api/book/"

export const createBook = (object) => {
    console.log("actions/index.js: createBook");
    console.log(object);

    return function(dispatch) {
        console.log("return function(dispatch)");

        return axios.post(`${apiURL}/new`, object)
            .then(response => {
                dispatch(createBookSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createBookSuccess = (book) => {
    return {
        type: ADD_BOOK,
        payload: {
            id: book.id,
            title: book.title,
            number: book.number
        }
    }
};

