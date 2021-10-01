import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
    constructor() {
        super();

        this.state = {
            // bookid: "",
            book: ""
        };
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