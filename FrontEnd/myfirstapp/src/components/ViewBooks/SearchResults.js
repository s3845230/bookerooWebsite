import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchResults extends Component {
    constructor() {
        super();

        this.state = {
            bookid: "",
            book: ""
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(bookid) {
        const id = this.state.bookid
        if (id) {
            axios.get(`http://localhost:8081/api/book/searchbyid/${id}`)
            // returns results
            .then((result) => {
                this.setState({ book: result.data})

                console.log(this.state.book);

            })
            // this.props.history.push({
            //     pathname: `/searchResults/${id}`,
            //     state: { book: this.state.book }
            // });
        }
    }

    render() {
        return (
            <div className="searchResults">
                <div className="container">
                    <h1 className="display-4 text-center">Showing Results For</h1>
                        {this.props.location.state.books.map((book) => (
                            <h3 key={book.id}>
                                <Link to={`/searchResults/${book.id}`}>{book.title}</Link>
                            </h3>
                        ))}
                </div>
            </div>
        )
    }
}

export default SearchResults;