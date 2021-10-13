import store from "../../../store";
import React from 'react';
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { adminCreateUser } from "../../../actions/Admin/userActions";
import AddUser from "../AddUser";

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
    accountRole: "ADMIN",
    ABN: null
};

describe('AddUser', () => {
    it("should create user and redirect to admin dashboard", async () => {
        const history = createMemoryHistory();
        render(
            <Provider store={store}>
                <Router history={history}>
                    <AddUser />
                </Router>
            </Provider>
        );

        userEvent.type(screen.getByLabelText(/email address/i), user.username);
        userEvent.type(screen.getByLabelText('Full Name'), user.fullName);
        userEvent.type(screen.getByLabelText('Password'), user.password);
        userEvent.type(screen.getByLabelText('Confirm Password'), user.confirmPassword);
        userEvent.type(screen.getByLabelText('Address'), user.address);
        userEvent.type(screen.getByLabelText('Suburb'), user.suburb);
        userEvent.selectOptions(screen.getByLabelText('State'), user.state);
        userEvent.type(screen.getByLabelText('Postcode'), user.postcode);
        userEvent.type(screen.getByLabelText('Phone Number'), user.phoneNo);
        userEvent.selectOptions(screen.getByLabelText('Type of Account'), user.accountRole);
        userEvent.click(screen.getByTestId('submit'));
        history.push("/admin");

        expect(axios.post).toHaveBeenCalledWith("http://localhost:8080/api/user/addUser", user, {"headers": {}});
        expect(history.location.pathname).toBe('/admin');
    });
});