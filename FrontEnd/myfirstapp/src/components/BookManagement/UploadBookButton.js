import React from 'react'
import {Link} from "react-router-dom";

 const UploadBookButton=() => {
    return (
        <React.Fragment>
            <Link to="/uploadBook" className="btn btn-lg btn-info">
                Add Book
            </Link>
        </React.Fragment>
    )
};
export default UploadBookButton;