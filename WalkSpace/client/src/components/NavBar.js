import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {logoutUser} from '../utils/authController';

class NavBar extends Component {
    render() {
        return (<nav className="navbar" role="navigation" aria-label="main navigation">
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
                    <Link to={"/"} className="navbar-item">
                        Home
                    </Link>

                    <Link to={"/"} className="navbar-item">
                        Documentation
                    </Link>

                    {/* <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link">
                            More
                        </Link>

                        <div className="navbar-dropdown">
                            <Link className="navbar-item">
                                About
                            </Link>
                            <Link className="navbar-item">
                                Jobs
                            </Link>
                            <Link className="navbar-item">
                                Contact
                            </Link>
                            <hr className="navbar-divider" />
                            <Link className="navbar-item">
                                Report an issue
                            </Link>
                        </div>
                    </div> */}
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        {/* add conditional to swap in log out button when already logged-in */}
                            <button className="button is-primary">
                                <strong>Sign up</strong>
                            </button>
                            <button className="button is-light">
                                Log in
                            </button>
                            <button className="button is-info" onClick={logoutUser}>
                                <strong>Log out</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>)
    }
}

export default NavBar