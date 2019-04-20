import React, { Component } from "react";
import { CurrentUser } from "../App"
import { Button } from "react-bulma-components/full";
import { Link } from 'react-router-dom';
import { logoutUser } from '../utils/authController';

class NavBar extends Component {
    // static contextType = CurrentUser;
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item" href="https://bulma.io">
                        <img alt="" src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </div>

                    <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to={"/profile"} className="navbar-item">
                            Profile
                    </Link>

                        <Link to={"/schedule"} className="navbar-item">
                            Schedule
                    </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                {/* add conditional to swap in log out button when already logged-in */}
                                {/* <Button className="button is-primary">
                                <strong>Sign up</strong>
                            </Button> */}
                                <CurrentUser.Consumer>
                                    {({ isUser }) =>
                                        <Button className={isUser ? "button is-primary" : "button is-light"}
                                            onClick={isUser ? <Link to={"/"}></Link> : logoutUser}
                                        >
                                            {isUser ? "Log in" : "Log out"}
                                        </Button>
                                    }
                                </CurrentUser.Consumer>
                                <Button
                                className="button is-info" onClick={logoutUser}>
                                    <strong>Log out</strong>
                                </Button>
                        </div>
                    </div>
                </div>
                </div>
            </nav >)
    }
}
// NavBar.contextType = CurrentUser;
export default NavBar