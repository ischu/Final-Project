import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Container } from "react-bulma-components/full";
import NavBar from "../components/NavBar";
import UserBox from "../components/UserBox";
import ClientBox from "../components/ClientBox";

class Profile extends Component {
    // STATE
    constructor(props) {
        super(props)
        this.state = {
            isClient: false,
            user: {
                id: 1,
                name: "friend-bot",
                email: "NONONON",
                phone: "(666)-666-6666",
                address: "123 Vondee Ave."
            },
            client: {
                pets: [{ name: "dog" }, { name: "cat" }],
                contact: { name: "mom" }
            }
        }
    }
    // METHODS
    componentDidMount = () => {
        console.log("French Fried and Dead Inside");
        this.getEmail();
    }
    getEmail=()=>{
        let token = sessionStorage.getItem("jwtToken");
        let decoded = jwt_decode(token);
        let decodedEmail = decoded.email;
        this.setState(
            {email: decodedEmail}
        );
        console.log(decoded);
    }

    render() {
        // client half of profile page only loads if user is client
        let boxTwo;
        if (this.state.isClient) {
            boxTwo = <ClientBox
                pets={this.state.pets}
                contact={this.state.contact}
            />
        } else {
            boxTwo = <React.Fragment />
        }
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container className="has-background-white-ter">
                    <UserBox
                        key={this.state.user.id}
                        name={this.state.user.name}
                        email={this.state.user.email}
                        phone={this.state.user.phone}
                        address={this.state.user.address}
                    >
                    </UserBox>
                    {boxTwo}
                </Container>
            </React.Fragment>
        );
    }
}

export default Profile;
