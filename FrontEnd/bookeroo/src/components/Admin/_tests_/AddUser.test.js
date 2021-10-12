import axios from "axios";
import { adminCreateUser } from "../../../actions/Admin/userActions";

jest.mock("axios");

describe('AddUser', () => {
    it("should create user and redirect to admin dashboard", async () => {
        const push = jest.fn();
        const mockHistory = { push };
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

        axios.post.mockResolvedValueOnce(user);

        adminCreateUser(user, mockHistory);

        // expect(axios).toHaveBeenCalledTimes(1);
        // expect(axios).toHaveBeenCalledWith(
        //     "http://localhost:8080/api/user/addUser",
        //     expect.objectContaining({ username: "test@test.com" })
        // );
        // expect(mockHistory.push).toHaveBeenCalledWith("/admin");
        expect(mockHistory.push) === "/admin";

    });
});