
class UserService {
    
    isUserPublisher() {
        const role = localStorage.getItem("userRole");
        return (role && role === "PUBLISHER");
    }
    
    isUserAdmin() {
        const role = localStorage.getItem("userRole");
        return (role && role === "ADMIN");
    }
    
    getUsername() {
        const username = localStorage.getItem("username");
        if (username) {
            return username;
        }
        return null;
    }

    getUserFullName() {
        const userFullName = localStorage.getItem("userFullName");
        if (userFullName) {
            return userFullName;
        }
        return null;
    }

    getUserId() {
        const userId = localStorage.getItem("userId");
        if (userId) {
            return userId;
        }
        return null;
    }
}

export default new UserService();
