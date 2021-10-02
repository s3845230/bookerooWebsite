import axios from "axios";
import authHeader from "../../services/authHeader";

export const adminCreateUser = (newUser, history) => async dispatch => {
    console.log(newUser);
    try {
        await axios.post("http://localhost:8080/api/user/addUser", newUser, { headers: authHeader() });
        history.push(`/admin`);
    }
    catch (err) {
        console.log(err);
    }
};
