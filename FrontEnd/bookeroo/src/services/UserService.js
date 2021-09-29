import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

class UserService {
    getUser(){
        const decoded = localStorage.getItem("decoded");
        const user = localStorage.getItem("user");
        console.log(decoded);
        console.log(user);
        return decoded;
    }

}

export default new UserService();
