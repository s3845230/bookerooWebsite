import axios from "axios";
import {
    GET_ERRORS,
    SET_CURRENT_USER} from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";


export const createNewUser = (newUser, history) => async dispatch => {
    console.log("securityActions.createNewUser");

    try{
        await axios.post("http://localhost:8080/api/users/register", newUser);
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


export const login = LoginRequest => async dispatch => {
    console.log("securityActions.login");

    try {

        // post => Login Request
        const res = await axios.post("http://localhost:8080/api/users/login", LoginRequest);
        // extract token from res.data
        const { token } = res.data;
        console.log(token);
        // store the token in the localStorage
        localStorage.setItem("jwtToken", token);
        // set our token in header ***
        setJWTToken(token);
        // decode token on React
        const decoded = jwt_decode(token);
        console.log(decoded);
        // dispatch to our securityReducer
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
        });

        // const { accountRole } = res.data;
        
        console.log(localStorage.getItem("jwtToken"));
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

