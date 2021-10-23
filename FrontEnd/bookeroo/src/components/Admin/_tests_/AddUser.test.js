import store from "../../../store";
import React from 'react';
import { createMemoryHistory } from 'history';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('When Admin creates an admin user', () => {
    it("should not display ABN field", () => {
        render(
            <Provider store={store}>
                <Router>
                    <AddUser />
                </Router>
            </Provider>
        );

        userEvent.selectOptions(screen.getByLabelText('Type of Account'), "CUSTOMER");

        expect(screen.getByLabelText('ABN')).not.toBeVisible();
    });
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
    it("should return error when admin types incorrect email", async () => {
        render(
            <Provider store={store}>
                <Router>
                    <AddUser />
                </Router>
            </Provider>
        );

        userEvent.type(screen.getByLabelText(/email address/i), "test");
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

        expect(screen.getByTestId('usernameError')).toHaveTextContent("Username is not an Email");
        expect(screen.getByTestId('submit')).toBeDisabled();
    });
    it("should return error when password is too short", () => {
        render(
            <Provider store={store}>
                <Router>
                    <AddUser />
                </Router>
            </Provider>
        );

        userEvent.type(screen.getByLabelText(/email address/i), user.username);
        userEvent.type(screen.getByLabelText('Full Name'), user.fullName);
        userEvent.type(screen.getByLabelText('Password'), "test");
        userEvent.type(screen.getByLabelText('Confirm Password'), user.confirmPassword);
        userEvent.type(screen.getByLabelText('Address'), user.address);
        userEvent.type(screen.getByLabelText('Suburb'), user.suburb);
        userEvent.selectOptions(screen.getByLabelText('State'), user.state);
        userEvent.type(screen.getByLabelText('Postcode'), user.postcode);
        userEvent.type(screen.getByLabelText('Phone Number'), user.phoneNo);
        userEvent.selectOptions(screen.getByLabelText('Type of Account'), user.accountRole);
        userEvent.click(screen.getByTestId('submit'));

        expect(screen.getByTestId('passwordError')).toHaveTextContent("Password must be at least 6 characters long");
        expect(screen.getByTestId('submit')).toBeDisabled();
    });
    it("should return error when passwords don't match", () => {
        render(
            <Provider store={store}>
                <Router>
                    <AddUser />
                </Router>
            </Provider>
        );

        userEvent.type(screen.getByLabelText(/email address/i), user.username);
        userEvent.type(screen.getByLabelText('Full Name'), user.fullName);
        userEvent.type(screen.getByLabelText('Password'), user.password);
        userEvent.type(screen.getByLabelText('Confirm Password'), "test");
        userEvent.type(screen.getByLabelText('Address'), user.address);
        userEvent.type(screen.getByLabelText('Suburb'), user.suburb);
        userEvent.selectOptions(screen.getByLabelText('State'), user.state);
        userEvent.type(screen.getByLabelText('Postcode'), user.postcode);
        userEvent.type(screen.getByLabelText('Phone Number'), user.phoneNo);
        userEvent.selectOptions(screen.getByLabelText('Type of Account'), user.accountRole);
        userEvent.click(screen.getByTestId('submit'));

        expect(screen.getByTestId('cpasswordError')).toHaveTextContent("Passwords Do Not Match");
        expect(screen.getByTestId('submit')).toBeDisabled();
    });
});

describe("When admin creates a publisher account", () => {
    it("should display ABN field when publisher is selected as account role", () => {
        render(
            <Provider store={store}>
                <Router>
                    <AddUser />
                </Router>
            </Provider>
        );

        userEvent.selectOptions(screen.getByLabelText('Type of Account'), "PUBLISHER");

        expect(screen.getByLabelText('ABN')).toBeVisible();
    });
})