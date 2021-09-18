import React, { Component } from 'react'
import "./SearchResults.css";

class SearchResults extends Component {
    render() {
        return (
            <div className="searchResults">
                <div className="container">
                    <h1 className="display-4 text-center">Showing Results For</h1>
                        {this.props.location.state.books.map((book) => 
                            <div className="row" key={book.id}>
                                <img key={book.id} className="cover rounded float-left img-thumbnail" src={`${book.imageType},${book.imageBlob}`} />
                                <h3>{book.title}</h3>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default SearchResults;