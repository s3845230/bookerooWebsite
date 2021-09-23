import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminFunctions extends Component {
    render() {
        return (
            <div className="adminMenu">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-4">Admin Dashboard</h1>
                                <div className="row">
                                    <div className="col">
                                        <h1 className="lead">User Management</h1>
                                        <Link className="btn btn-lg btn-primary mb-5 mr-3" to="/admin/addUser">
                                            Add User
                                        </Link>
                                        <Link className="btn btn-lg btn-primary mb-5 mr-3" to="/admin/viewAllUsers">
                                            View All Users
                                        </Link>
                                        <h1 className="lead">Book Management:</h1>
                                        <Link className="btn btn-lg btn-primary mb-5 mr-3" to="/admin/addBook">
                                            Add Book
                                        </Link>
                                        <Link className="btn btn-lg btn-primary mb-5 mr-3" to="/admin/viewAllBooks">
                                            View All Books
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminFunctions;