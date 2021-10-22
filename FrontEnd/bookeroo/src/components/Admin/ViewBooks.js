import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {AUTHMICROSERVICE_IP} from "../../constants"

class ViewBooks extends Component {
    constructor() {
        super();

        this.state = {
            selectedBook: ""
        };

        this.setSelectedBook = this.setSelectedBook.bind(this);
    }

    // checks if a book has been selected => redirects to Edit form when selectedBook != null
    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedBook !== this.state.selectedBook) {
            console.log(this.state.selectedBook);
            this.props.history.push({
                pathname: `/admin/viewAllBooks/editBook/${this.state.selectedBook.id}`,
                state: { book: this.state.selectedBook }
            });
        }
    }

    // updates the selectedBook state
    setSelectedBook(id) {
        axios.get(AUTHMICROSERVICE_IP + `/api/book/searchbyid/${id}`)
        // return results
        .then((result) => {
            this.setState({ selectedBook: result.data})
            console.log(result.data);
        })
    }

    render() {
        return (
            <div className="viewAllBooks">
                <div className="container">
                    <h1 className="display-4 text-center">All Books</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="lead" style={{ fontSize: "24px", fontWeight: "bold" }}><p>Book Title</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.location.state.books.map((book) => (
                                    <tr key={book.id}>
                                        <td><p className="lead" style={{ fontSize: "24px" }}>{book.title}</p></td>
                                        <td><button type="submit" className="btn btn-lg btn-primary mb-5 mr-3" onClick={() => this.setSelectedBook(book.id)}>Edit</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
}

export default ViewBooks;