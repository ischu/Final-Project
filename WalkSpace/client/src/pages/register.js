import React from "react";
import { Container } from "react-bulma-components/full";
import RegisterForm from "../components/RegisterForm.js";

function Register() {
    return (
      <Container className="has-background-white-ter">
        <div className="has-text-primary">
          Hello
        </div>
        <RegisterForm/>
      </Container>
    );
}

export default Register;
