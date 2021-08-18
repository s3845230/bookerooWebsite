import React, { Component } from 'react'

class UploadBook extends Component {
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
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Author"
                                        name="author"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        placeholder="Date of Publication"
                                        name="date_of_publication"
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
export default UploadBook;