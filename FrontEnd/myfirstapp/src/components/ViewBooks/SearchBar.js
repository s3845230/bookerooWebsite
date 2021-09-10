import React, { Component } from 'react'
import axios from 'axios';

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            search: ""
        };  

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const searchQuery = {
            search: this.state.search
        }

        console.log(searchQuery);

        axios.get("http://localhost:8081/api/book/search", searchQuery);
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
                                value={this.state.title}
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
export default SearchBar;