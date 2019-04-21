import React, { Component } from "react";
import CurrentUser from "../AppContext";
import { Button } from "react-bulma-components/full";

class NavBar extends Component {
    // static contextType = CurrentUser;
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item" href="https://bulma.io">
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
                                        <a href={"/profile"} className="navbar-item">
                                            Profile
                                        </a>
                                        <a href={"/schedule"} className="navbar-item">
                                            Schedule
                                        </a>
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
                                        <Button onClick={logOut} className="is-dark">
                                            <strong>Log out</strong>
                                        </Button>
                                        :
                                        <React.Fragment>
                                            <a href={"/"} className="button is-primary">
                                                <strong>Log in</strong>
                                            </a>
                                            <a
                                                className="button is-info" href={"/register"}>
                                                <strong>Register</strong>
                                            </a>
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