import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        {/*Frontpage showcase*/}
        {/*<div className="text-panel text-white">*/}
        {/*  <div className="caption">*/}
        {/*    <h1 className="display-3 mb-4">Bookeroo</h1>*/}
        {/*    <h3 className="display-6 mb-1">Passionate About Books</h3>*/}
        {/*    <br />*/}
        {/*    <p><a className="btn btn-success btn-lg" href="/register" role="button">Sign Up Now</a></p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="landing-inner light-overlay text-dark">
          <div className="container">
            <div className="row">

              {/*Greeter*/}
              <div className="col">
                <div className="text-panel text-white">
                  <div className="caption">
                    <h1 className="display-3 mb-1" style={{fontSize:"3.3em"}}>Bookeroo</h1>
                    <h3 className="display-6 mb-3">Passionate About Books</h3>
                    <br />
                    <p><a className="btn btn-lg btn-success " href="/register" role="button">Sign Up Now</a></p>
                  </div>
                </div>
              </div>

              {/*Development Landing*/}
              <div className="col">
                <div className="development-landing">
                  <h1 className="display-3 mb-4" style={{fontSize:"3.3em"}}>Development Landing</h1>
                  <p className="lead">
                    Below are the available front-end pages that have been developed.
                  </p>
                  <hr />
                  <Link className="btn btn-lg btn-primary mb-2 mr-2" to="/admin">
                    Admin Functions
                  </Link>
                  <Link className="btn btn-lg btn-primary mb-2 mr-2" to="/publisher">
                    Publisher Landing
                  </Link>
                  <Link className="btn btn-lg btn-secondary mb-2 mr-2" to="/login">
                    User Login
                  </Link>
                  <Link className="btn btn-lg btn-secondary mb-2 mr-2" to="/register">
                    User Register
                  </Link>
                  <Link className="btn btn-lg btn-secondary mb-2 mr-2" to="/devtestpage">
                    Dev Test Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;