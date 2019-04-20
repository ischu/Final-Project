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

export const CurrentUser = React.createContext({isUser:false});
class App extends Component {
  constructor() {
    super();
    this.state = {
        isUser:true,
        setUser: this.setUser
    };
}
  setUser=user=>{
    this.setState({user})
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
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/client-search" component={ClientSearch} />
          </Switch>
        </Router>
      </CurrentUser.Provider>
    );
  }
}

export default App;
