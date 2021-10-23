import axios from "axios";
import {
    GET_ERRORS,
    SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import {AUTHMICROSERVICE_IP} from "../constants";


export const createNewUser = (newUser, history) => async dispatch => {
    console.log("securityActions.createNewUser");

    try{
        await axios.post(AUTHMICROSERVICE_IP + "/api/auth/register", newUser);
        history.push("/login");
    }
    catch (err){
        console.log(err);
    }
};


export const loginUser = LoginRequest => async dispatch => {
    console.log("securityActions.login");
    console.log(LoginRequest);

    try {
        const response = await axios.post(AUTHMICROSERVICE_IP + "/api/auth/login", LoginRequest);
        console.log("response: " + response);

        const { token } = response.data;
        console.log("token: " + token);

        // STORE TOKEN IN LOCALSTORAGE
        localStorage.setItem("jwtToken", token);

        // DECODE TOKEN
        const decoded = jwt_decode(token);
        console.log(JSON.stringify(decoded));
        
        // STORE USER PROPERTIES IN LOCALSTORAGE
        localStorage.setItem("userId", decoded.id);
        localStorage.setItem("username", decoded.username);
        localStorage.setItem("userFullName", decoded.fullName);
        localStorage.setItem("userRole", decoded.role);

    }
    catch (err) {
        console.log(err);
    }
};

export const logout = () => dispatch => {

    console.log("securityActions.logout()")
    console.log(localStorage.getItem("jwtToken"));

    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("userFullName");
    localStorage.removeItem("userRole");

    console.log(localStorage.getItem("jwtToken"));

    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
};

