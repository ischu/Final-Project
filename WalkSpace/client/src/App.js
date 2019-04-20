import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bulma-components/full";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Login from "./pages/login";
import Register from "./pages/register";
import Schedule from "./pages/schedule";
import ClientList from "./pages/clientlist";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Hero></Hero>
        <NavBar></NavBar>
        <Container className="has-background-white-ter">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/client-list" component={ClientList} />
            <Route exact path="/schedule" component={Schedule} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
