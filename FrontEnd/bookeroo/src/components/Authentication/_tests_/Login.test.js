import store from "../../../store";
import React from 'react';
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from "../Login";
import {AUTHMICROSERVICE_IP} from "../../../constants";

jest.mock("axios");

const user = {
    username: "test@test.com",
    fullName: "Test Test",
    password: "test123",
    confirmPassword: "test123",
    address: "test",
    suburb: "test",
    state: "VIC",
    postcode: "3000",
    phoneNo: "0423123231",
    accountRole: "CUSTOMER",
    ABN: null
};

describe('When user has created an account', () => {
    it("should create account and redirect to login page", async () => {
        const history = createMemoryHistory();
        render(
            <Provider store={store}>
                <Router history={history}>
                    <Login />
                </Router>
            </Provider>
        );
        
        // login
        userEvent.type(screen.getByLabelText('Email Address'), user.username);
        userEvent.type(screen.getByLabelText('Password'), user.password);
        userEvent.click(screen.getByTestId('login'));
        
        expect(axios.post).toHaveBeenCalledWith(AUTHMICROSERVICE_IP + "/api/auth/login", {password: "test123", username: "test@test.com"});
    });
});