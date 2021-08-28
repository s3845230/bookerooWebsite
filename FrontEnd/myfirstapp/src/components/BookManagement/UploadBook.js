import React, { Component } from 'react'
import "./UploadBook.css";
import CurrencyInput from 'react-currency-input-field';
import axios from "axios";


class UploadBook extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            author: "",
            genre: "",
            // type: "",
            price: "",
            publisher: "",
            date_of_publication: "",
            tagline: "",
            table_of_contents: "",
            blurb: "",
            bookCover: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e) {
        e.preventDefault();
        e.target.className += " was-validated";
        const newBook = {
            title: this.state.title,
            author: this.state.author,
            genre: this.state.genre,
            // type: this.state.type,
            price: this.state.price,
            publisher: this.state.publisher,
            date_of_publication: this.state.date_of_publication,
            table_of_contents: this.state.table_of_contents,
            tagline:this.state.tagline,
            blurb: this.state.blurb,
            bookCover: this.state.bookCover
        }
        console.log(newBook);
        
        axios.post("https:localhost:8081/api/book/uploadBook");

        // this.props.createB
        // ook(newBook, this.props.history);
    }
    

    render() {
        const { errors } = this.state;
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
                                    <label htmlFor="priceInput">Title</label>
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
                                    <label htmlFor="priceInput">Author</label>
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

                                {/*Genre*/}
                                <div className="form-group">
                                    <label htmlFor="priceInput">Genre</label>
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
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Type</span>
                                    </div>
                                    <select className=" custom-select form-control form-control-lg" required>
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
                                <div className="form-group">
                                    <label htmlFor="priceInput">Price</label>
                                    <CurrencyInput
                                        intlConfig={{ locale: 'en-US', currency: 'AUD' }}
                                        className="form-control form-control-lg"
                                        name="price"
                                        placeholder="Price"
                                        decimalsLimit={2}
                                        onValueChange={(value, name) => console.log(value, name)}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Book needs a price.
                                    </div>
                                </div>

                                {/*Publisher*/}
                                <div className="form-group">
                                    <label htmlFor="priceInput">Publisher</label>
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
                                    <label htmlFor="priceInput">Date of Publication</label>
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        placeholder="Date of Publication"
                                        name="date_of_publication"
                                        value= {this.state.date_of_publication}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Date cannot be Empty.
                                    </div>
                                </div>

                                {/*Tagline*/}
                                <div className="form-group">
                                    <label htmlFor="priceInput">Tagline</label>
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
                                    <label htmlFor="priceInput">Table of Contents</label>
                                    <textarea
                                        type="paragraph"
                                        className="form-control form-control-lg"
                                        placeholder="Add Table Of Contents here"
                                        name="table_of_contents"
                                        rows={10}
                                        cols={10}
                                        value= {this.state.table_of_contents}
                                        onChange = {this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Every book needs a Table of Contents.
                                    </div>
                                </div>

                                {/*Blurb*/}
                                <div className="form-group">
                                    <label htmlFor="priceInput">Blurb</label>
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

                                {/*Book Cover*/}
                                <div className="form-group">
                                    <label htmlFor="priceInput">Upload Book Cover</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        name="bookCover"
                                        accept="image/png, image/jpeg"
                                        value={this.state.bookCover}
                                        onChange={this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Need a Book Cover.
                                    </div>
                                </div>
                                <div className="image-preview"></div>
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
    // createProject: PropTypes.func.isRequired
};

export default UploadBook;