import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { loginUser } from "../utils/authController";
import CurrentUser from "../AppContext";

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
            token: '',
        };
    };
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    // send to authcontroller to get errors
    setError = (errData) => {
        this.setState({ errors: errData})
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        // imported from authcontroller
        loginUser(userData, this.props.history, this.setError, () => {
            // importing context to change "global state"
            let context = this.context;
            context.logIn()
        });
    };
    onCancel = e => {
        e.preventDefault()
        this.setState({
            email: '',
            password: '',
        });
        console.log(this.state.errors)
    }
    render() {
        return (
            <CurrentUser.Consumer>
                {/* if user is logged in, they are automatically redirected to the schedule page */}
                {({ isUser }) =>
                    isUser ?
                        <React.Fragment>
                            <Redirect to="/profile" />
                        </React.Fragment>
                        :
                        <React.Fragment>
                            {/* email input */}
                            <div className="field">
                                <label className="label">  Email</label>
                                <div className="control has-icons-right">
                                    <input
                                        className={!(this.state.errors.email) ? "input is-medium is-primary " : "input is-medium is-danger"} 
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={this.state.errors}
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                    />
                                    {/* <span className="icon is-small is-right">
                                        TODO-add error.status state to set this 200=check 400=triangle
                                        <i className={this.state.errors.email?"fas fa-check" : "fas fa-exclamation-triangle"}></i>
                                    </span> */}
                                </div>
                                <p className="help is-danger">{this.state.errors.email}</p>
                            </div>
                            {/* password input */}
                            <div className="field">
                                <label className="label">  Password</label>
                                <div className="control has-icons-right">
                                    <input
                                        className={!this.state.errors.passwordincorrect ? "input is-medium is-primary " : "input is-medium is-danger"}
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={this.state.errors.passwordincorrect}
                                        type="password"
                                        id="password"
                                        placeholder="Password" />
                                    {/* <span className="icon is-small is-right">
                                        <i className={this.state.errors.passwordincorrect?"fas fa-check" : "fas fa-exclamation-triangle"}></i>
                                    </span> */}
                                </div>
                                <p className="help is-danger">{this.state.errors.passwordincorrect}</p>
                            </div>
                            {/* buttons */}
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-info" onClick={this.onSubmit}>Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button has-text-grey is-secondary" onClick={this.onCancel}>Cancel</button>
                                </div>
                            </div>
                        </React.Fragment>
                }
            </CurrentUser.Consumer>
        )
    }
}
LoginForm.contextType = CurrentUser;
export default LoginForm;