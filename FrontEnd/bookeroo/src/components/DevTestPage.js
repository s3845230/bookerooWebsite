import React, { Component } from "react";
import axios from "axios";
import authHeader from "../services/authHeader";
import UserService from "../services/UserService";
import securityReducer from "../reducers/securityReducer";
import {Link} from "react-router-dom";
import { logout } from "../actions/securityActions";

class DevTestPage extends Component {

    constructor() {
        super();

        this.state = {
            content: "",
            publisher: "",
            admin: ""
        };
    }


    componentDidMount() {
        console.log(authHeader());

        if (UserService.isUserPublisher()) {
            this.setState({publisher: "PUBLISHER"});
        }
        if (UserService.isUserAdmin()) {
            this.setState({admin: "ADMIN"});
        }

        axios.get(`http://localhost:8080/api/user/test`, { headers: authHeader() })
            .then(
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
                                <h1 className="display-4 text-left">DevTestPage - Now deployed in AWS!</h1>
                                <p className="lead">
                                    This is a page to test developing features
                                </p>
                                <p>
                                    <button className="btn btn-lg btn-secondary mb-2 mr-2" onClick={() => logout()}>
                                        LOGOUT
                                    </button>
                                </p>
                                <p>
                                    {this.state.content} <br/>
                                    {UserService.getUsername()} <br/>
                                    {UserService.getUserFullName()} <br/>
                                    {this.state.publisher} <br/>
                                    {this.state.admin} <br/>
                                    {UserService.getUserId()}
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