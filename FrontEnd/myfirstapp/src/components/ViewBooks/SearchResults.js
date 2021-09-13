import React, { Component } from 'react'

class SearchResults extends Component {
    render() {
        return (
            <div className="searchResults">
                <div className="container">
                    <h1 className="display-4 text-center">Showing Results For</h1>
                        {this.props.location.state.books.map((book) => <h3 key={book.id}>{book.title}</h3>)}
                </div>
            </div>
        )
    }
}

export default SearchResults;