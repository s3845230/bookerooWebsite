import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            search: "",
            books: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.books !== this.state.books) {
            // redirect to search results page with books
            this.props.history.push({
                pathname: '/searchResults',
                state: { books: this.state.books }
            });
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const search = this.state.search

        // if search not empty
        if (search) {
            axios.get(`http://localhost:8080/api/book/search/${search}`)
            // returns results
            .then((result) => {
                this.setState({ books: result.data})

                console.log(this.state.books);
            })
        }
        // get all books
        else {
            console.log("GET ALL BOOKS");
            axios.get(`http://localhost:8080/api/book/search`)
            // return results
            .then((result) => {
                this.setState({ books: result.data})
                console.log(result.data);
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                {/*Collapse Mobile Search*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
                    Search
                </button>
                <div className="collapse navbar-collapse" id="collapseSearch">
                    {/*Search Form*/}
                    <form className="navbar-left form-inline" role="search" onSubmit={this.onSubmit}>
                        <div className="card-body">
                            <input 
                                type="text" 
                                className="form-control mr-sm-2" 
                                placeholder="Search"
                                name="search"
                                value={this.state.search}
                                onChange={this.onChange}
                            />
                            <button type="submit" className="btn btn-outline-primary">Search</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(SearchBar);