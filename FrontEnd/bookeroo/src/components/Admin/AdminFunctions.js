import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminFunctions extends Component {
    render() {
        return (
            <div className="adminMenu">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-left">
                                <h1 className="display-4 text-left">Admin Dashboard</h1>
                                <Link className="btn btn-lg btn-primary mb-2 mr-2" to="/admin/addUser">
                                    Add User
                                </Link>
                                <Link className="btn btn-lg btn-primary mb-2 mr-2" to="/admin/addBook">
                                    Add Book
                                </Link>
                                <Link className="btn btn-lg btn-primary mb-2 mr-2" to="/admin/viewAllUsers">
                                    View All Users
                                </Link>
                                <Link className="btn btn-lg btn-primary mb-2 mr-2" to="/admin/viewAllBooks">
                                    View All Books
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminFunctions;