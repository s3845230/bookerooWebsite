import React, { Component } from "react";
import axios from "axios";
import authHeader from "../services/authHeader";
import userService from "../services/UserService";

class DevTestPage extends Component {

    constructor() {
        super();

        this.state = {
            content: "",
            user: userService.getUser()
        };
    }

    componentDidMount() {
        console.log(authHeader());
        axios.get(`http://localhost:8080/api/user/test`, { headers: authHeader() }).then(
        response => {
            this.setState({
                content: response.data
            });
        },
        error => {
            this.setState({
                content: "ERROR"
            });
            }
        );
    }

    render() {
        return (
            <div className="publisherLanding">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-left">
                                <h1 className="display-4 text-left">DevTestPage </h1>
                                <p className="lead">
                                    This is a page to test developing features
                                </p>
                                <p>
                                    {this.state.content}
                                    {this.state.user}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DevTestPage