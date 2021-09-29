import axios from "axios";
import {
    GET_ERRORS,
    SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";


export const createNewUser = (newUser, history) => async dispatch => {
    console.log("securityActions.createNewUser");

    try{
        await axios.post("http://localhost:8080/api/auth/register", newUser);
        history.push("/login");
        // dispatch({
        //     payload: {}
        // });
    }
    catch (err){
        console.log(err);
        // dispatch ({
        //     type: 'GET_ERRORS',
        //     payload: err.response.data
        // });

    }
};


export const loginUser = LoginRequest => async dispatch => {
    console.log("securityActions.login");
    console.log(LoginRequest);

    try {
        const response = await axios.post("http://localhost:8080/api/auth/login", LoginRequest);
        console.log("response: " + response);

        const { token } = response.data;
        console.log("token: " + token);

        // STORE TOKEN IN LOCALSTORAGE
        localStorage.setItem("jwtToken", token);

        // SET TOKEN AS HEADER
        // setJWTToken(token);

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
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
};

