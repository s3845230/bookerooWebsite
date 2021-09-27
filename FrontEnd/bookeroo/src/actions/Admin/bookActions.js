import axios from "axios";

export const adminCreateBook = (newBook, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8081/api/book/new/", newBook);
    }
    catch (err) {
        console.log(err)
    }
}