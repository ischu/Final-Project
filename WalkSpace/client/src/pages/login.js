import React from "react";
import { Container } from "react-bulma-components/full";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm.js";

function Login() {
    return (
      <div>
      <NavBar></NavBar>
      <Container className="has-background-white-ter">
        <LoginForm/>
      </Container>
      </div>
    );
}

export default Login;
