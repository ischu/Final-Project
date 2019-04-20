import React, { Component } from "react";
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
    onSubmit = e => {
        // e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };


        // imported from authcontroller
        loginUser(userData, () => {
            // importing context to change "global state"
            let context = this.context;
            context.logIn()
        });
    };
    render() {
        const { errors } = this.state;
        return (
            <div>
                {/* email input */}
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-right">
                        <input
                            className={"input is-primary" || "input is-success" || "input is-danger"}
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            type="email"
                            id="email"
                            placeholder="Email"
                        />
                        <span className="icon is-small is-right">
                            <i className={"fas fa-check" || "fas fa-exclamation-triangle"}></i>
                        </span>
                    </div>
                    {/* <p className="help is-danger">This email is invalid</p> */}
                </div>
                {/* password input */}
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-right">
                        <input
                            className={"input is-primary" || "input is-success" || "input is-danger"}
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            type="password"
                            id="password"
                            placeholder="Password" />
                        <span className="icon is-small is-right">
                            <i className={"fas fa-check" || "fas fa-exclamation-triangle"}></i>
                        </span>
                    </div>
                    {/* <p className="help is-danger">This password is invalid</p> */}
                </div>
                {/* buttons */}
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={this.onSubmit}>Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-text">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
LoginForm.contextType = CurrentUser;
export default LoginForm;