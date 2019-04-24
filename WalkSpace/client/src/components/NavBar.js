import React, { Component } from "react";
import {Link} from "react-router-dom";
// import { Button } from "react-bulma-components/full";
import CurrentUser from "../AppContext";

class NavBar extends Component {
    // static contextType = CurrentUser;
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img alt="logo" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </div>
                </div>
                {/* add className="navbar-menu" and this section will be hidden when on screens smaller than 1024 */}
                <div id="navbar" className="navbar-menu">
                    <div className="navbar-start">
                        <CurrentUser.Consumer>
                            {({ isUser }) =>
                                isUser ?
                                    <React.Fragment>
                                        <Link to={"/profile"} className="navbar-item">
                                            Profile
                                        </Link>
                                        <Link to={"/schedule"} className="navbar-item">
                                            Schedule
                                        </Link>
                                    </React.Fragment>
                                    :
                                    <React.Fragment></React.Fragment>
                            }
                        </CurrentUser.Consumer>
                    </div>

                    <div className="navbar-end">
                        <div className="buttons">
                            {/* the context of user log in state determines which button renders */}
                            <CurrentUser.Consumer>
                                {({ isUser, logOut }) =>
                                    isUser ?
                                        <Link to={"/"} onClick={logOut} className="button is-dark">
                                            <strong>Log out</strong>
                                        </Link>
                                        :
                                        <React.Fragment>
                                            <Link to={"/"} className="button is-primary">
                                                <strong>Log in</strong>
                                            </Link>
                                            <Link  to={"/register"} className="button is-info">
                                                <strong>Register</strong>
                                            </Link>
                                        </React.Fragment>
                                }
                            </CurrentUser.Consumer>
                        </div>
                    </div>
                </div>
            </nav >)
    }
}
// NavBar.contextType = CurrentUser;
export default NavBar