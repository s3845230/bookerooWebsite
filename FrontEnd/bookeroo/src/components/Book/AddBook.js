import React, {Component} from "react";
import {createBook} from "../actions";
import axios from "../../axios";

class AddBook extends Component {
    
    constructor(){
        super();
        
        this.state = {
            "title":"",
            "number":""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    
    onSubmit(e) {
        e.preventDefault();
        const newBook = {
            "title":this.state.title,
            "number":this.state.number
        }

        // createBook(newBook);
        axios.post("http://localhost:8080/api/book/new", newBook);
        
        console.log(newBook);
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div style={{padding:"90px"}}>
                        <div className="form-group">
                            <label htmlFor="inputTitle">Book Title</label>
                            <input type="title" className="form-control" id="inputTitle"
                                   placeholder="Enter Book Title"
                                   name="title"
                                   value={this.state.title}
                                   onChange = {this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputNumber">Book Number</label>
                            <input type="number" className="form-control" id="inputNumber"
                                   placeholder="Enter Book Title"
                                   name="number"
                                   value={this.state.number}
                                   onChange = {this.onChange}
                            />
                        </div>
                        <input type="submit" className="btn btn-primary mt-4" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddBook;