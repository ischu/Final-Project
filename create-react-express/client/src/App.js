import React, { Component } from "react";
import { Container } from "react-bulma-components/full"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container className="has-background-black">
        <div className="App has-text-primary">
          Hello
        </div>
      </Container>
    );
  }
}

export default App;
