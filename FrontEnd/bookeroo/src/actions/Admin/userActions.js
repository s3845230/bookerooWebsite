import axios from "axios";
import { GET_ERRORS } from "./../types";

export const adminCreateUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/users/register", newUser);
        history.push(`/admin`);
    }
    catch (err) {
        console.log(err);
        // dispatch ({
        //     type: GET_ERRORS,
        //     payload: err.response.data
        // });
    }
};
