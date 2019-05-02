import React from "react";
import { Container, Level } from "react-bulma-components/full";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm.js";

function Login() {
  return (
    <div>
      <NavBar></NavBar>
      <Container className="has-background-white-ter">
        <Level>
          <div className="level-item has-text-centered has-background-grey-dark">
            <p id="levelWords" className="title has-text-white-bis">Login</p>
          </div>
        </Level>
        <LoginForm />
      </Container>
    </div>
  );
}

export default Login;
