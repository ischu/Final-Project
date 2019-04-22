import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Container } from "react-bulma-components/full";
import NavBar from "../components/NavBar";
import UserBox from "../components/UserBox";
import ClientBox from "../components/ClientBox";
import { getClientByEmail } from "../utils/docController";

class Profile extends Component {
    // STATE
    constructor(props) {
        super(props)
        this.state = {
            isClient: false,
            user: {_id:1, name:"1", email:"1", address:"1"},
            client: {
                pets: [{ name: "dog" }, { name: "cat" }],
                contact: { name: "mom" }
            }
        }


    }
    // METHODS
    componentDidMount() {
        this.getEmail()
    }
    getEmail = () => {
        let token = sessionStorage.getItem("jwtToken");
        let decoded = jwt_decode(token);
        let decodedEmail = decoded.email;
        // calls client collection for client document
        console.log(getClientByEmail(decodedEmail))
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
                {/* short circuit will delay render until data has been fetched */}
                    {this.state && this.state.user &&
                        <UserBox
                            key={this.state.user._id}
                            name={this.state.user.name}
                            email={this.state.user.email}
                            phone={this.state.user.phone}
                            address={this.state.user.address}
                        >
                        </UserBox>
                    }
                    {boxTwo}
                </Container>
            </React.Fragment>
        );
    }
}

export default Profile;
