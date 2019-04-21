import React from "react";
import { Container } from "react-bulma-components/full";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import RegisterForm from "../components/RegisterForm.js";

function Register() {
    return (
        <div>
            <Hero></Hero>
            <NavBar></NavBar>
            <Container className="has-background-white-ter">
                <RegisterForm />
            </Container>
        </div>
    );
}

export default Register;
