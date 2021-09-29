import React, { Component } from "react";
import { Link } from "react-router-dom";
import UploadBookButton from "../BookManagement/UploadBookButton";

class PublisherLanding extends Component {

    render() {
        return (
            <div className="publisherLanding">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-left">
                                <h1 className="display-4 text-left">Publisher Landing</h1>
                                <p className="lead">
                                    This is where all of the functionality exclusive to publishers will be accessible.
                                </p>
                                <UploadBookButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PublisherLanding