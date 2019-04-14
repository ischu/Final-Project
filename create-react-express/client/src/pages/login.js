import React from "react";
import { Container } from "react-bulma-components/full";
import LoginForm from "../components/LoginForm.js";

function Login() {
    return (
      <Container className="has-background-white-ter">
        <div className="has-text-primary">
          Hello
        </div>
        <LoginForm/>
      </Container>
    );
}

export default Login;
