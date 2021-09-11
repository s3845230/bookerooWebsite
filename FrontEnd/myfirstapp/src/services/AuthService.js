import axios from "axios";

class AuthService {
    login(LoginRequest) {
        return axios
            .post("http://localhost:8080/login", LoginRequest)
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    
    logout() {
        localStorage.removeItem("user");
    }
    
    register(newUser) {
        return axios.post("http://localhost:8080/register", newUser);
    }
}

export default new AuthService();