import React, { Component } from "react";
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";
import { adminCreateUser } from "../../actions/Admin/userActions"

class AddUser extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            accountRole: "",
            fullName: "",
            password: "",
            confirmPassword: "",
            errors: {},
            errorMessages: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        // delayed at the moment
        if (this.state.password !== this.state.confirmPassword) {
            this.setState(prevState => ({
                errorMessages: [...prevState.errorMessages, "passwords don't match"]
            }));
        }
        else {
            const newUser = {
                username: this.state.username,
                accountRole: this.state.accountRole,
                fullName: this.state.fullName,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
            };

            console.log(newUser);

            this.props.adminCreateUser(newUser, this.props.history);
        }
    }
    
    render() {
        return (
            <div className="addUser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add User</h1>
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
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddUser.propTypes = {
    adminCreateUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { adminCreateUser }
)(AddUser);