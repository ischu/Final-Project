import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import CurrentUser from "./AppContext";
import Hero from "./components/Hero";
import Login from "./pages/login";
import Register from "./pages/register";
import Schedule from "./pages/schedule";
import Profile from "./pages/profile";
import ClientSearch from "./pages/clientsearch";
import "./App.css";
import setAuthToken from "./utils/setAuthToken";
// import {loginUser} from "./utils/authController";
import CurrentUser from "./AppContext";


class App extends Component {
  constructor() {
    super();
    this.state = {
      isUser: false,
      setUser: this.setUser,
      logOut: this.logoutUser,
      logIn: this.logIn
    };
  }
  // this allows manipulation of state by child components
  setUser = user => {
    this.setState({ user })
  }
  // if there is a token in session storage, set isUser to true, otherwise, set to false
  checkIfUser = () => {
    const isToken = sessionStorage.getItem("jwtToken");
    if (isToken) {
      this.setState({
        isUser: true
       })
    } else {
      this.setState({ isUser: false })
    }
  };
  // Auth Controllers
  logIn=()=>{
    console.log("log in")
    this.checkIfUser()
  }
  logoutUser = () => {
    // Remove token from local storage
    sessionStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // set isUser to false
    this.checkIfUser()
  };
  componentDidMount() {
    // call check
    this.checkIfUser();
  }
  render() {
    return (
      <CurrentUser.Provider value={this.state}>
        <Router>
          <Hero></Hero>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/client-search" component={ClientSearch} />
          </Switch>
        </Router>
      </CurrentUser.Provider>
    );
  }
}

export default App;
