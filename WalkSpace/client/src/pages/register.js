import React from "react";
import { Container } from "react-bulma-components/full";
import NavBar from "../components/NavBar";
import RegisterForm from "../components/RegisterForm.js";

function Register() {
    return (
        <div>
            <NavBar></NavBar>
            <Container className="has-background-white-ter">
                <RegisterForm />
            </Container>
        </div>
    );
}

export default Register;
