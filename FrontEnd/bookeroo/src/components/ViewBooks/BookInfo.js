import React, { useState, useEffect } from 'react';
import "./BookInfo.css";
import axios from "axios";
import authHeader from "../../services/authHeader";
import {AUTHMICROSERVICE_IP} from "../../constants"

function BookInfo({ match }) {
    useEffect(() => {
        fetchBook();
        console.log(match);
    }, []);

    const [book, setBook] = useState({});

    const fetchBook = async () => {
        axios.get(AUTHMICROSERVICE_IP + `/api/book/searchbyid/${match.params.id}`)
            .then(
                response => {
                    console.log(response.data);
                    setBook(response.data);
                });

        console.log(book);
    }

    return (
        <div className="bookInfo">
            <div className="container">
                <h1 className="text-center">{book.title}</h1>
                <h2 className="lead text-center" style={{ color: 'blue'}}>{book.author}</h2>
                <div className="row">
                    <div className="col">
                        <img className="cover rounded mx-auto d-block" src={`${book.imageType},${book.imageBlob}`} />
                    </div>
                </div>
                <div className="row" id="">
                    <div className="col-6">
                        <h2 className="lead text-center" style={{ color: 'grey'}}> Published by: {book.publisher} | {book.publicationDate}</h2>
                        <p className="text-center">{book.blurb}</p>
                    </div>

                    {/* Price information */}
                    <div className="col-5">
                        <div className="card" id="price">
                            <div className="card-body text-center">
                                <h5 className="card-title">Price: ${book.price}</h5>
                                <button className="btn btn-danger">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Collapse of book details*/}
                <div className="card">
                    <div className="card-header" id="details">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#bookDetails" aria-expanded="true" aria-controls="bookDetails">
                                Book Details
                            </button>
                        </h2>
                    </div>

                    <div id="bookDetails" className="collapse show" aria-labelledby="details">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6 col-sm-3">
                                    <h5>Title:</h5>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <p>{book.title}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-3">
                                    <h5>Author:</h5>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <p>{book.author}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-3">
                                    <h5>ISBN:</h5>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <p>{book.isbn}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-3">
                                    <h5>Genre:</h5>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <p>{book.genre}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-3">
                                    <h5>Type:</h5>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <p>{book.type}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-3">
                                    <h5>Publisher:</h5>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <p>{book.publisher}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-3">
                                    <h5>Publication Date:</h5>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <p>{book.publicationDate}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-3">
                                    <h5>Table of Contents:</h5>
                                </div>
                                <div className="col-6 col-sm-3">
                                    <p>{book.tableOfContents}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BookInfo;