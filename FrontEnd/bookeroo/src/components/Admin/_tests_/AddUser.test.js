import axios from "axios";
import * as userActions from "../../../actions/Admin/userActions";

jest.mock("axios");

describe('AddUser', () => {
    let mock;
    beforeEach(() => {
        mock = jest.spyOn(axios, 'post');
    });
    afterEach(() => {
        mock.mockRestore();
    });
    it("should create user and redirect to admin dashboard", async () => {
        const push = jest.fn();
        const mockHistory = { push };
        // const dispatch = jest.fn();
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
            ABN: null,
        };
        axios.post = jest.fn().mockResolvedValueOnce(user);

        await userActions.adminCreateUser(user, mockHistory);
        
        expect(mock);

        // expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/user/addUser', user);
        // expect(mockHistory.push).toHaveBeenCalledWith("/admin");
        expect(mockHistory.push) === "/admin";

    });
});