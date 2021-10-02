import axios from "axios";

export const adminCreateUser = (newUser, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/users/register", newUser);
        history.push(`/admin`);
    }
    catch (err) {
        console.log(err);
    }
};
