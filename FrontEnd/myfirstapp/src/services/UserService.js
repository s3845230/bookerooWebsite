import axios from "axios";
import AuthHeader from "./AuthHeader";

class UserService {
    getUser() {
        return axios.get("https://localhost:8080/users/getUser", {headers: AuthHeader()});
    }
}

export default new UserService();