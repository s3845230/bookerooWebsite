import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class AdminFunctions extends Component {
    constructor() {
        super();

        this.state = {
            books: []
        };

        this.fetchBooks = this.fetchBooks.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.books !== this.state.books) {
            this.props.history.push({
                pathname: '/admin/viewAllBooks',
                state: { books: this.state.books }
            });
        }
    }

    fetchBooks(e) {
        e.preventDefault();
        axios.get(`http://localhost:8080/api/book/search`)
        // return results
        .then((result) => {
            this.setState({ books: result.data})
            console.log(result.data);
        })
    }

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
                                        <button className="btn btn-lg btn-primary mb-5 mr-3" onClick={this.fetchBooks}>
                                            View All Books
                                        </button>
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