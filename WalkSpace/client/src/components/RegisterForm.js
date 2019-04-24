import React, { Component } from "react";
import { registerUser } from "../utils/authController";
// import axios from "axios";
import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";
// import {registerUser} from "../utils/authController"

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {},
            token: '',
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        // imported from authcontroller
        registerUser(newUser, this.props.history);
    };
    onCancel = e => {
        this.setState({
            name: "",
            email: "",
            password: "",
            password2: "",
        });
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <div id="register-form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input is-primary"
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input is-primary"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input is-primary"
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                            />

                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input className="input is-primary"
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                            />

                        </div>
                    </div>
                    <div className="field">
                        <div className="field is-grouped">
                            <div className="control">
                                <button type="submit" className="button has-text-white is-primary" onClick={this.onSubmit}>Submit</button>
                            </div>
                            <div className="control">
                                <button className="button has-text-white is-primary" onClick={this.onCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(RegisterForm);