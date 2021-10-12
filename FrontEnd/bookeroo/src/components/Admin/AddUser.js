import React, { Component } from "react";
import * as PropTypes from 'prop-types'
import { connect } from "react-redux";
import { adminCreateUser } from "../../actions/Admin/userActions"

class AddUser extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            fullName: "",
            password: "",
            confirmPassword: "",
            address: "",
            suburb: "",
            state: "",
            postcode: "",
            phoneNo: "",
            accountRole: "",
            ABN: null,

            // validation
            errors: {username: '', password: '', confirmPassword: ''},
            usernameValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            formValid: false,
            showABN: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validateField(fieldName, value) {
        let validationErrors = this.state.errors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;
        let showABN = this.state.showABN;

        switch(fieldName) {
            case 'username':
                usernameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                validationErrors.username = usernameValid ? '' : 'Username is not an Email';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                validationErrors.password = passwordValid ? '': 'Password must be at least 6 characters long';
                break;
            case 'confirmPassword':
                confirmPasswordValid = value.match(this.state.password);
                validationErrors.confirmPassword = confirmPasswordValid ? '': 'Passwords Do Not Match';
                break;
            case 'accountRole':
                showABN = value.match("PUBLISHER");
                break;
            default:
                break;
        }
        this.setState({errors: validationErrors,
                        usernameValid: usernameValid,
                        passwordValid: passwordValid,
                        confirmPasswordValid: confirmPasswordValid,
                        showABN: showABN
        }, this.validateRegisterForm);
    }

    validateRegisterForm() {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid && this.state.confirmPasswordValid});
    }

    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ 
            [name]: value 
        }, () => { this.validateField(name, value) });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            address: this.state.address,
            suburb: this.state.suburb,
            state: this.state.state,
            postcode: this.state.postcode,
            phoneNo: this.state.phoneNo,
            accountRole: this.state.accountRole,
            ABN: this.state.ABN
        };

        console.log(newUser);

        this.props.adminCreateUser(newUser, this.props.history);
    }

    // for displaying bootstrap validation error messages
    handleError(error) {
        return(error.length === 0 ? '' : 'is-invalid');
    }
    
    render() {
        return (
            <div className="addUser">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add User</h1>
                            <form onSubmit={this.onSubmit}>
                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="username">Email Address</label>
                                    <input
                                        type="text"
                                        className={`form-control form-control-lg ${this.handleError(this.state.errors.username)}`}
                                        placeholder="Email Address (Username)"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        {this.state.errors.username}
                                    </div>
                                </div>
                                {/* Full Name */}
                                <div className="form-group">
                                    <label htmlFor="fullname">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Full Name"
                                        name="fullName"
                                        value={this.state.fullName}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                {/* Password */}
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control form-control-lg ${this.handleError(this.state.errors.password)}`}
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        {this.state.errors.password}
                                    </div>
                                </div>
                                {/* Confirm Password */}
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className={`form-control form-control-lg ${this.handleError(this.state.errors.confirmPassword)}`}
                                        placeholder="Confirm Password"
                                        value={this.state.confirmPassword}
                                        onChange={this.onChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        {this.state.errors.confirmPassword}
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="form-control form-control-lg"
                                        placeholder="Address"
                                        value={this.state.address}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                {/* Suburb */}
                                <div className="form-group">
                                    <label htmlFor="suburb">Suburb</label>
                                    <input
                                        type="text"
                                        name="suburb"
                                        className="form-control form-control-lg"
                                        placeholder="Suburb"
                                        value={this.state.suburb}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                {/* State */}
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <select className="form-control form-control-lg" name="state" value={this.state.state} onChange={this.onChange} required>
                                        <option disabled value="">State</option>
                                        <option value="VIC">VIC</option>
                                        <option value="ACT">ACT</option>
                                        <option value="NSW">NSW</option>
                                        <option value="QLD">QLD</option>
                                        <option value="WA">WA</option>
                                        <option value="SA">SA</option>
                                        <option value="TAS">TAS</option>
                                    </select>
                                </div>
                                {/* Postcode */}
                                <div className="form-group">
                                    <label htmlFor="postcode">Postcode</label>
                                    <input
                                        type="number"
                                        name="postcode"
                                        className="form-control form-control-lg"
                                        placeholder="Postcode"
                                        value={this.state.postcode}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                {/* Phone Number */}
                                <div className="form-group">
                                    <label htmlFor="phoneNo">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phoneNo"
                                        pattern="[0-9]{10}"
                                        className="form-control form-control-lg"
                                        placeholder="Phone Number"
                                        value={this.state.phoneNo}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                {/*Type of Account*/}
                                <div className="form-group" style={{paddingTop:"15px"}}>
                                    <label htmlFor="accountRole">Type of Account</label>
                                    <select className="form-control form-control-lg" id="accountRole" name="accountRole" value={this.state.accountRole} onChange={this.onChange} required>
                                        <option disabled value="">Account type</option>
                                        <option value="CUSTOMER">Customer</option>
                                        <option value="PUBLISHER">Publisher</option>
                                        <option value="ADMIN">Admin</option>
                                    </select>
                                </div>
                                {/* ABN */}
                                {/* Displays only if Publisher Role is selected */}
                                <div className="form-group">
                                    <label htmlFor="ABN">ABN</label>
                                    <input
                                        type="tel"
                                        name="ABN"
                                        pattern="[0-9]{11}"
                                        className="form-control form-control-lg"
                                        placeholder="ABN"
                                        value={this.state.ABN}
                                        onChange={this.onChange}
                                        hidden={!this.state.showABN}
                                        required={this.state.showABN}
                                    />
                                </div>
                                <input disabled={!this.state.formValid} type="submit" className="btn btn-info btn-block mt-4" />
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