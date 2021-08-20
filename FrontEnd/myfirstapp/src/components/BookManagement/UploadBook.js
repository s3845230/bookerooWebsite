import React, { Component } from 'react'
import PropTypes from "prop-types";
import CurrencyInput from 'react-currency-input-field';
import { bookActions } from "../../actions/bookActions";

class UploadBook extends Component {
    constructor() {
        super();

        this.state = {
            title: "",
            author: "",
            type: "",
            date_of_publication: "",
            price: "",
            tagline: "",
            table_of_contents: "",
            blurb: ""
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
            date_of_publication: this.state.date_of_publication,
            table_of_contents: this.state.table_of_contents,
            tagline:this.state.tagline,
            blurb: this.state.blurb  
        }

        this.props.createBook(newBook, this.props.history);
    }

    render() {
        return (
            <div className="uploadBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Upload Book</h1>
                            <p className="lead text-center">Add a new or second hand book below</p>
                            <form action="upload-book"> 
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Title"
                                        name="title"
                                        value= {this.state.title}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
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
                                <div className="form-group">
                                    <select className="form-control form-control-lg">
                                        <option value="">Select type</option>
                                        <option value="personal">Personal Book</option>
                                        <option value="new">New Book</option>
                                        <option value="old">Second Hand Book</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <CurrencyInput
                                        intlConfig={{ locale: 'en-US', currency: 'AUD' }}
                                        className="form-control form-control-lg"
                                        name="price"
                                        placeholder="Price"
                                        defaultValue={0}
                                        decimalsLimit={2}
                                        onValueChange={(value, name) => console.log(value, name)}
                                    />
                                </div>
                                <div className="form-group">
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
                                <div className="form-group">
                                    <textarea
                                        type="paragraph"
                                        className="form-control form-control-lg"
                                        placeholder="Add Taglines"
                                        name="tagline"
                                        rows={7}
                                        cols={7}
                                        value= {this.state.tagline}
                                        onChange = {this.onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
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
                                <div className="form-group">
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
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UploadBook.propTypes = {
    createProject: PropTypes.func.isRequired
};

export default UploadBook;