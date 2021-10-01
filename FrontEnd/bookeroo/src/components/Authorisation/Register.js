import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
    constructor() {
        super();

    this.state = {
      username: "",
      accountRole: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const newUser = {
      username: this.state.username,
      accountRole: this.state.accountRole,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    console.log(newUser);
    console.log(this.props.history);

    this.props.createNewUser(newUser, this.props.history);
  }

  onChange(event) {
      this.setState({ [event.target.name]: event.target.value });
  }
    
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Full Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Name cannot be Empty.
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Email Address (Username)"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Username cannot be Empty.
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Password cannot be Empty.
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Confirm password cannot be Empty.
                  </div>
                  {/*Type of Account*/}
                  <div className="form-group" style={{paddingTop:"15px"}}>
                    <select className="form-control form-control-lg" id="accountRole" name="accountRole" value={this.state.accountRole} onChange={this.onChange} required>
                      <option disabled value="">Account type</option>
                      <option value="CUSTOMER">Customer</option>
                      <option value="PUBLISHER">Publisher</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                    <div className="invalid-feedback">
                      Need to select an option.
                    </div>
                  </div>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { createNewUser }) (Register);