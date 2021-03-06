import React, { Component } from 'react';
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateBook } from "../../actions/bookActions";

export class EditBook extends Component {
    constructor(props) {
        super();

        this.state = {
            id: props.location.state.book.id,
            title: props.location.state.book.title,
            author: props.location.state.book.author,
            isbn: props.location.state.book.isbn,
            genre: props.location.state.book.genre,
            type: props.location.state.book.type,
            price: props.location.state.book.price,
            publisher: props.location.state.book.publisher,
            publicationDate: props.location.state.book.publicationDate,
            tagline: props.location.state.book.tagline,
            tableOfContents: props.location.state.book.tableOfContents,
            blurb: props.location.state.book.blurb,
            imageData: props.location.state.book.imageType + "," + props.location.state.book.imageBlob, // This shouldn't have to be done in the front-end
        };  

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        e.target.className += " was-validated";
        const book = {
            id: this.state.id,
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
        }

        console.log(book);

        this.props.updateBook(book, this.props.history);
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
            <div className="editBook">
                <div className="container">
                    <h1 className="display-4 text-center">Edit Book</h1>
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

                                {/* Price */}
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input
                                        type = "number"
                                        className = "form-control form-control-lg"
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
                                        name="blurb"
                                        rows={10}
                                        cols={10}
                                        value= {this.state.blurb}
                                        onChange = {this.onChange}
                                        required
                                    />
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

EditBook.propTypes = {
    updateBook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect (
    mapStateToProps, { updateBook }
) (EditBook)