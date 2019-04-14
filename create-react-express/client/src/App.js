import React, { Component } from "react";
import { Container } from "react-bulma-components/full";
import LoginForm from "./components/LoginForm.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container className="has-background-white-ter">
        <div className="App has-text-primary">
          Hello
        </div>
        <LoginForm/>
      </Container>
    );
  }
}

export default App;
