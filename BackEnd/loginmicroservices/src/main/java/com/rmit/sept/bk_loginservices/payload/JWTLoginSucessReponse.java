package com.rmit.sept.bk_loginservices.payload;

import com.rmit.sept.bk_loginservices.model.Role;
import com.rmit.sept.bk_loginservices.model.User;

public class JWTLoginSucessReponse {
    private boolean success;
    private String token;

    public JWTLoginSucessReponse(boolean success, String token) {
        this.success = success;
        this.token = token;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "JWTLoginSuccessResponse{" +
                "success="      + success       + ", " +
                "token='"       + token         + '\'' + '}';
    }
}
