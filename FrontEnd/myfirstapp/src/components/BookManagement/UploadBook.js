import React, { Component } from 'react';
import "./UploadBook.css";
import * as PropTypes from "prop-types";
import CurrencyInput from 'react-currency-input-field';
import { withRouter } from "react-router";
import axios from 'axios';

import { connect } from "react-redux";
import { createBook } from "../actions/BookActions";


class UploadBook extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            author: "",
            isbn: "",
            genre: "",
            type: "",
            price: "",
            publisher: "",
            publicationDate: "",
            tagline: "",
            tableOfContents: "",
            blurb: "",
            imageData: ""
        };  

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    async onSubmit(e) {
        e.preventDefault();
        e.target.className += " was-validated";
        const newBook = {
            title: this.state.title,
            author: this.state.author,
            isbn: this.state.isbn,
            genre: this.state.genre,
            type: this.state.type,
            price: this.state.price,
            publisher: this.state.publisher,
            publicationDate: this.state.publicationDate,
            tableOfContents: this.state.tableOfContents,
            tagline: this.state.tagline,
            blurb: this.state.blurb,
            imageData: this.state.imageData
        }

        console.log(newBook);

        this.props.createBook(newBook, this.props.history);

        // try {
        //     const response = await axios.post("http://localhost:8081/api/book/new/", newBook);
        //     console.log(response);
        //     const { bookID } = response.data;
        //     console.log(bookID);
        //     history.push(`/searchResults${bookID}`);
        // }
        // catch (err) {
        //     console.log(err);
        // }

        // this.props.history.push(`/searchResults${newBook.isbn}`);
    }

    /* Reads the image file for preview */
    imageHandler = (e) => {
        const bookCoverReader = new FileReader();
        bookCoverReader.onload = () => {
            if (bookCoverReader.readyState === 2) {
                this.setState({imageData: bookCoverReader.result})
            }
        }
        bookCoverReader.readAsDataURL(e.target.files[0])
    }  

    render() {
        const { errors, imageData } = this.state;
        return (
            <div className="uploadBook">
                <div className="container">
                    <h1 className="display-4 text-center">Upload Book</h1>
                    <p className="lead text-center">Add a new or second hand book below</p>
                    <div className="row">
                        <div className="col">
                            <form className="needs-validation" onSubmit={this.onSubmit} noValidate>
                            {/*<form onSubmit={this.onSubmit}>*/}

                                {/*Title*/}
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Title"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Title cannot be Empty.
                                    </div>
                                </div>

                                {/*Author*/}
                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Author"
                                        name="author"
                                        value= {this.state.author}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Author cannot be Empty.
                                    </div>
                                </div>

                                {/*ISBN*/}
                                <div className="form-group">
                                    <label htmlFor="isbn">ISBN</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="ISBN"
                                        name="isbn"
                                        value= {this.state.isbn}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        ISBN cannot be Empty.
                                    </div>
                                </div>

                                {/*Genre*/}
                                <div className="form-group">
                                    <label htmlFor="genre">Genre</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Genre"
                                        name="genre"
                                        value= {this.state.genre}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Genre cannot be Empty.
                                    </div>
                                </div>

                                {/*Type of Book*/}
                                <div className="form-group">
                                    <label htmlFor="type">Type</label>
                                    <select className="form-control form-control-lg" id="type" name="type" value={this.state.type} onChange={this.onChange} required>
                                        <option selected disabled value="">Select type</option>
                                        <option value="personal">Personal Book</option>
                                        <option value="new">New Book</option>
                                        <option value="old">Second Hand Book</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Need to select an option.
                                    </div>
                                </div>

                                {/*Price*/}
                                {/*<div className="form-group">*/}
                                {/*    <label htmlFor="price">Price</label>*/}
                                {/*    <CurrencyInput*/}
                                {/*        intlConfig={{ locale: 'en-US', currency: 'AUD' }}*/}
                                {/*        className="form-control form-control-lg"*/}
                                {/*        name="price"*/}
                                {/*        placeholder="Price"*/}
                                {/*        decimalsLimit={2}*/}
                                {/*        onValueChange={(value, name) => console.log(value, name)}*/}
                                {/*        required*/}
                                {/*    />*/}
                                {/*    <div className="invalid-feedback">*/}
                                {/*        Book needs a price.*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*Working solution - price is now present in JSON and therefore will be inserted into database*/}
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input
                                        type = "number"
                                        className = "form-control form-control-lg"
                                        name = "price"
                                        placeholder = "Price"
                                        // decimalsLimit = {2}
                                        min={1}
                                        value = {this.state.price}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Book needs a price.
                                    </div>
                                </div>

                                {/*Publisher*/}
                                <div className="form-group">
                                    <label htmlFor="publisher">Publisher</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Publisher"
                                        name="publisher"
                                        value= {this.state.publisher}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Publisher cannot be Empty.
                                    </div>
                                </div>

                                {/*Date of Publication*/}
                                <div className="form-group">
                                    <label htmlFor="publicationDate">Date of Publication</label>
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        placeholder="Date of Publication"
                                        name="publicationDate"
                                        value= {this.state.publicationDate}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Date cannot be Empty.
                                    </div>
                                </div>

                                {/*Tagline*/}
                                <div className="form-group">
                                    <label htmlFor="tagline">Tagline</label>
                                    <textarea
                                        type="paragraph"
                                        className="form-control form-control-lg"
                                        placeholder="Add Taglines Here"
                                        name="tagline"
                                        rows={7}
                                        cols={7}
                                        value= {this.state.tagline}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter at least one tagline.
                                    </div>
                                </div>

                                {/*Table of Contents*/}
                                <div className="form-group">
                                    <label htmlFor="tableOfContents">Table of Contents</label>
                                    <textarea
                                        type="paragraph"
                                        className="form-control form-control-lg"
                                        placeholder="Add Table Of Contents here"
                                        name="tableOfContents"
                                        rows={10}
                                        cols={10}
                                        value= {this.state.tableOfContents}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Every book needs a Table of Contents.
                                    </div>
                                </div>

                                {/*Blurb*/}
                                <div className="form-group">
                                    <label htmlFor="blurb">Blurb</label>
                                    <textarea
                                        type="paragraph"
                                        className="form-control form-control-lg"
                                        placeholder="Add Blurb here"
                                        name="blurb"
                                        rows={10}
                                        cols={10}
                                        value= {this.state.blurb}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Every book needs a Blurb.
                                    </div>
                                </div>

                                {/*TODO: Why doesn't BackEnd support the image format in the json?*/}
                                {/*Book Cover*/}
                                <div className="form-group">
                                    <label htmlFor="imageData">Upload Book Cover</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        name="imageData"
                                        accept="image/*"
                                        onChange={this.onChange && this.imageHandler}
                                        required
                                    />
                                    {/*Book Cover Preview*/}
                                    <div className="col-xs-6 col-md-3">
                                        <img src={this.state.imageData} />
                                    </div>
                                    <div className="invalid-feedback">
                                        Need a Book Cover.
                                    </div>
                                </div>
                                <input type="submit" className="btn btn-primary btn-lg btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UploadBook.propTypes = {
    createBook: PropTypes.func.isRequired
};

// export default withRouter(UploadBook);

const mapStateToProps = state => ({
    errors: state.errors
});
export default connect (
    mapStateToProps, { createBook }
) (UploadBook)