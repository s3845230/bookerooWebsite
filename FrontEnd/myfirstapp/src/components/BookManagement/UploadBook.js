import React, { Component } from 'react'
import "./UploadBook.css";
import PropTypes from "prop-types";
import CurrencyInput from 'react-currency-input-field';
import { bookActions } from "../../actions/bookActions";

class UploadBook extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            author: "",
            genre: "",
            type: "",
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
    onSubmit(e){
        e.preventDefault();
        const newBook = {
            title: this.state.title,
            author: this.state.author,
            type: this.state.type,
            price: this.state.price,
            publisher: this.state.publisher,
            date_of_publication: this.state.date_of_publication,
            table_of_contents: this.state.table_of_contents,
            tagline:this.state.tagline,
            blurb: this.state.blurb,
            bookCover: this.state.bookCover  
        }

        this.props.createBook(newBook, this.props.history);
    }


    render() {
        return (
            <div className="uploadBook">
                <div className="container">
                    <h1 className="display-4 text-center">Upload Book</h1>
                    <p className="lead text-center">Add a new or second hand book below</p>
                    <div className="row">
                        <div className="col">
                            <form action="upload-book">

                                {/*Title*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Title</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Title"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>

                                {/*Author*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Author</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Author"
                                        name="author"
                                        value= {this.state.author}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Genre*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Genre</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Genre"
                                        name="genre"
                                        value= {this.state.genre}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Type of Book*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Type</span>
                                    </div>
                                    <select className="form-control form-control-lg">
                                        <option value="">Select type</option>
                                        <option value="personal">Personal Book</option>
                                        <option value="new">New Book</option>
                                        <option value="old">Second Hand Book</option>
                                    </select>
                                </div>

                                {/*Price*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Price</span>
                                    </div>
                                    <CurrencyInput
                                        intlConfig={{ locale: 'en-US', currency: 'AUD' }}
                                        className="form-control form-control-lg"
                                        name="price"
                                        placeholder="Price"
                                        defaultValue={0}
                                        decimalsLimit={2}
                                        onValueChange={(value, name) => console.log(value, name)}
                                        required
                                    />
                                </div>

                                {/*Publisher*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Publisher</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Publisher"
                                        name="publisher"
                                        value= {this.state.publisher}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Date of Publication*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Date</span>
                                    </div>
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        placeholder="Date of Publication"
                                        name="date_of_publication"
                                        value= {this.state.date_of_publication}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>

                                {/*Tagline*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Tagline</span>
                                    </div>
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
                                </div>

                                {/*Table of Contents*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Table of Contents</span>
                                    </div>
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
                                </div>

                                {/*Blurb*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Blurb</span>
                                    </div>
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
                                </div>

                                {/*Book Cover*/}
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">Book Cover</span>
                                    </div>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        name="bookCover"
                                        accept="image/png, image/jpeg"
                                        value={this.state.bookCover}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <div className="image-preview"></div>
                            </form>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary btn-lg btn-block mt-4" />
                </div>
            </div>
        )
    }
}

UploadBook.propTypes = {
    createProject: PropTypes.func.isRequired
};

export default UploadBook;