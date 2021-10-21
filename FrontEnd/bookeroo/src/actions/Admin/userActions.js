import axios from "axios";
import authHeader from "../../services/authHeader";
import {AUTHMICROSERVICE_IP} from "../../constants";

export const adminCreateUser = (newUser, history) => async dispatch => {
    console.log(newUser);
    try {
        await axios.post(AUTHMICROSERVICE_IP + "/api/user/addUser", newUser, { headers: authHeader() });
        history.push(`/admin`);
    }
    catch (err) {
        console.log(err);
    }
};
