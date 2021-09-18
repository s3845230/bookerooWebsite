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

export const getAllBooks = (history) => async dispatch => {
    const res = await axios.get(`http://localhost:8081/api/book/search`);
    history.push("/searchResults");
    dispatch({
      type: GET_ALL_BOOKS,
      payload: res.data
    });
};

