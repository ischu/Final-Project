import React, { Component } from "react";
// import { Link } from "react-router-dom";

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
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
        console.log(newUser);
    };
    render() {
        const { errors } = this.state;
        return (
            <div>
                {/* <div className="col s8 offset-s2">
                <Link to="/" className="btn-flat waves-effect">
                  <i className="material-icons left">keyboard_backspace</i> Back to
                  home
                </Link>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <h4>
                    <b>Register</b> below
                  </h4>
                  <p className="">
                    Already have an account? <Link to="/login">Log in</Link>
                  </p>
                </div> */}
                <div id="register-form" onSubmit={this.onSubmit}>
                    <div clasName="field">
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
                    <div clasName="field">
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
                    <div clasName="field">
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
                    <div clasName="field">
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
                    <div clasName="field">
                        <div class="field is-grouped">
                            <div class="control">
                                <button type="submit" class="button is-link">Submit</button>
                            </div>
                            <div class="control">
                                <button class="button is-text">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;