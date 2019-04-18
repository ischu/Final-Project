import React from "react";
import { Container } from "react-bulma-components/full";
import LoginForm from "../components/LoginForm.js";
import RegisterForm from "../components/RegisterForm.js";

function Login() {
    return (
      <Container className="has-background-white-ter">
        <div className="has-text-primary">
          Hello
        </div>
        <LoginForm/>
        <RegisterForm/>
      </Container>
    );
}

export default Login;
