

export default function authHeader() {
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
        console.log("authHeader.js: " + jwtToken);
        return { Authorization: jwtToken };
    }
    else {
        return {};
    }
}
