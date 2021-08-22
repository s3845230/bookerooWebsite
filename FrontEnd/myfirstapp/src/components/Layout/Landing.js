import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        {/*Frontpage showcase*/}
        <div className="text-panel">
          <div className="caption">
            <h1 className="display-3 mb-4">Bookeroo</h1>
            <h3 className="display-6 mb-1">Passionate About Books</h3>
            <br />
            <p><a class="btn btn-success btn-lg" href="/register" role="button">Sign Up Now</a></p>
          </div>
        </div>

        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  Development Landing
                </h1>
                <p className="lead">
                  {/*Text Subline*/}
                </p>
                <hr />
                <Link className="btn btn-lg btn-primary mr-2" to="/register">
                  Sign Up
                </Link>
                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-lg btn-secondary mr-2" to="/publisher">
                    Publisher Landing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;