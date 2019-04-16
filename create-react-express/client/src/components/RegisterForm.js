import React, { Component } from "react";

class RegisterForm extends Component {
    render() {
        return (
            <div>
                {/* email input */}
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-right">
                        <input className={"input is-primary" || "input is-success" || "input is-danger"} type="email" placeholder="Email" />
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
                        <input className={"input is-primary" || "input is-success" || "input is-danger"} type="password" placeholder="Password" />
                        <span className="icon is-small is-right">
                            <i className={"fas fa-check" || "fas fa-exclamation-triangle"}></i>
                        </span>
                    </div>
                    {/* <p className="help is-danger">This password is invalid</p> */}
                </div>
                {/* buttons */}
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-text">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm;