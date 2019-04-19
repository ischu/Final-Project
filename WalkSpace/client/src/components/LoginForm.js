import React, { Component } from "react";

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    onSubmit = e => {
        e.preventDefault();
    const userData = {
          email: this.state.email,
          password: this.state.password
        };
    console.log(userData);
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
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-text">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;