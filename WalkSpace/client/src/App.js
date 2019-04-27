import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Login from "./pages/login";
import Register from "./pages/register";
import Schedule from "./pages/schedule";
import Profile from "./pages/profile";
import ClientSearch from "./pages/clientsearch";
import "./App.css";
import setAuthToken from "./utils/setAuthToken";
import { getClientByEmail, getEmployeeByEmail } from "./utils/docController";
// import {loginUser} from "./utils/authController";
import CurrentUser from "./AppContext";


class App extends Component {
  constructor() {
    super();
    // this allows manipulation of state by child components
    this.setUser = newUser => {
      this.setState({ user: newUser })
    }
    this.state = {
      isUser: false,
      type:"employee",
      user: {},
      setUser: this.setUser,
      logOut: this.logoutUser,
      logIn: this.logIn
      };
  }

  // if there is a token in session storage, set isUser to true, otherwise, set to false
  checkIfUser = () => {
    const isToken = sessionStorage.getItem("jwtToken");
    if (isToken) {
      this.setState({
        isUser: true
      })
      // this function sets user to a mongodb file
      this.getEmail(this.setUser);
    } else {
      this.setState({ isUser: false })
    }
  };
  // Auth Controllers
  logIn = () => {
    console.log("log in")
    this.checkIfUser()
  }
  logoutUser = () => {
    // Remove token from local storage
    sessionStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // set isUser to false
    this.checkIfUser();

  };
  componentDidMount() {
    // call check
    this.checkIfUser();
  }
  // 
  getEmail = (func) => {
    let token = sessionStorage.getItem("jwtToken");
    let decoded = jwt_decode(token);
    let decodedEmail = decoded.email;
    // calls client collection for client document
    if(this.state.type==="client")
    {console.log(getClientByEmail(decodedEmail, func));}
    // calls employee collection for employee document
    if(this.state.type==="employee")
    {console.log(getEmployeeByEmail(decodedEmail, func));}
}
  render() {
    return (
      <CurrentUser.Provider value={this.state}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/profile" component={Profile} />
            {/* NYI */}
            <Route exact path="/client-search" component={ClientSearch} />
          </Switch>
        </Router>
      </CurrentUser.Provider>
    );
  }
}

export default App;
