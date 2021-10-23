import React, { Component } from 'react';
import "./UploadBook.css";
import * as PropTypes from "prop-types";

import { connect } from "react-redux";
import { createBook } from "../../actions/bookActions";
import UserService from "../../services/UserService";

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
            imageData: "",
            bookSeller: ""
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
            imageData: this.state.imageData,
            bookSeller: UserService.getUsername()
        }

        console.log(newBook);

        this.props.createBook(newBook, this.props.history);

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
        return (
            <div className="uploadBook">
                <div className="container">
                    <h1 className="display-4 text-center">Upload Book</h1>
                    <p className="lead text-center">Add a new or second hand book below</p>
                    <div className="row">
                        <div className="col">
                            <form className="needs-validation" onSubmit={this.onSubmit} noValidate>
                                {/*Title*/}
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Title"
                                        id="title"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>

                                {/*Author*/}
                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Author"
                                        id="author"
                                        name="author"
                                        value= {this.state.author}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*ISBN*/}
                                <div className="form-group">
                                    <label htmlFor="isbn">ISBN</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="ISBN"
                                        id="isbn"
                                        name="isbn"
                                        value= {this.state.isbn}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Genre*/}
                                <div className="form-group">
                                    <label htmlFor="genre">Genre</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Genre"
                                        id="genre"
                                        name="genre"
                                        value= {this.state.genre}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Type of Book*/}
                                <div className="form-group">
                                    <label htmlFor="type">Type</label>
                                    <select className="form-control form-control-lg" id="type" name="type" value={this.state.type} onChange={this.onChange} required>
                                        <option disabled value="">Select type</option>
                                        <option value="personal">Personal Book</option>
                                        <option value="new">New Book</option>
                                        <option value="old">Second Hand Book</option>
                                    </select>
                                </div>

                                {/*Price*/}
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input
                                        type="number"
                                        pattern="[0-9]*"
                                        className = "form-control form-control-lg"
                                        id="price"
                                        name = "price"
                                        placeholder = "Price"
                                        min={1}
                                        value = {this.state.price}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Publisher*/}
                                <div className="form-group">
                                    <label htmlFor="publisher">Publisher</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Publisher"
                                        id="publisher"
                                        name="publisher"
                                        value= {this.state.publisher}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Date of Publication*/}
                                <div className="form-group">
                                    <label htmlFor="publicationDate">Date of Publication</label>
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        placeholder="Date of Publication"
                                        id="publicationDate"
                                        name="publicationDate"
                                        value= {this.state.publicationDate}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Tagline*/}
                                <div className="form-group">
                                    <label htmlFor="tagline">Tagline</label>
                                    <textarea
                                        type="paragraph"
                                        className="form-control form-control-lg"
                                        placeholder="Add Taglines Here"
                                        id="tagline"
                                        name="tagline"
                                        rows={7}
                                        cols={7}
                                        value= {this.state.tagline}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Table of Contents*/}
                                <div className="form-group">
                                    <label htmlFor="tableOfContents">Table of Contents</label>
                                    <textarea
                                        type="paragraph"
                                        className="form-control form-control-lg"
                                        placeholder="Add Table Of Contents here"
                                        id="tableOfContents"
                                        name="tableOfContents"
                                        rows={10}
                                        cols={10}
                                        value= {this.state.tableOfContents}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Blurb*/}
                                <div className="form-group">
                                    <label htmlFor="blurb">Blurb</label>
                                    <textarea
                                        type="paragraph"
                                        className="form-control form-control-lg"
                                        placeholder="Add Blurb here"
                                        id="blurb"
                                        name="blurb"
                                        rows={10}
                                        cols={10}
                                        value= {this.state.blurb}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Book Cover*/}
                                <div className="form-group">
                                    <label htmlFor="imageData">Upload Book Cover</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="imageData"
                                        name="imageData"
                                        accept="image/*"
                                        onChange={this.onChange && this.imageHandler}
                                        required
                                    />
                                    {/*Book Cover Preview*/}
                                    <div className="col-xs-6 col-md-3">
                                        <img src={this.state.imageData} />
                                    </div>
                                </div>
                                <input data-testid="submit" type="submit" className="btn btn-primary btn-lg btn-block mt-4" />
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

const mapStateToProps = state => ({
    errors: state.errors
});
export default connect (
    mapStateToProps, { createBook }
) (UploadBook)