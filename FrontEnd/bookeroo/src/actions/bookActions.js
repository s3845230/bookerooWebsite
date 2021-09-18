import axios from "axios";
import { GET_ERRORS, GET_ALL_BOOKS, GET_BOOKS } from "./types";

// export const getBooks = (search, history) => async dispatch => {
//   try {
//     const res = await axios.get(`http://localhost:8081/api/book/search/${search}`);
//     history.push("/searchResults");
//     dispatch({
//       type: GET_BOOKS,
//       payload: res.data
//     });
//   } catch (error) {
//     history.push("/searchResults");
//     dispatch({
//       type: GET_ERRORS,
//       payload: error.res.data
//     });
//   }
// };

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

export const getAllBooks = (history) => async dispatch => {
    const res = await axios.get(`http://localhost:8081/api/book/search`);
    history.push("/searchResults");
    dispatch({
      type: GET_ALL_BOOKS,
      payload: res.data
    });
};

