import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import { Container } from "react-bulma-components/full";
import NavBar from "../components/NavBar";
import UserBox from "../components/UserBox";
import ClientBox from "../components/ClientBox";
import { getClientByEmail, getEmployeeByEmail } from "../utils/docController";
import CurrentUser from "../AppContext";

class Profile extends Component {
    // STATE
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         user: null
    //     }
    // }
    // METHODS
    componentDidMount() {
        // this.getEmail(this.context.setUser);
        // console.log(this.context.user);
        // this.setUser(this.context.user);
    }
    // will be passed as callback in docController functions
    // setUser = (x) => {
    //     this.setState({ user: x });
    // };
    // // Unnecessary function to get email from token
    // getEmail = (func) => {
    //     let token = sessionStorage.getItem("jwtToken");
    //     let decoded = jwt_decode(token);
    //     let decodedEmail = decoded.email;
    //     // calls client collection for client document
    //     // console.log(getClientByEmail(decodedEmail, func));
    //     console.log(getEmployeeByEmail(decodedEmail, func));
    // }

    render() {
        console.log(this.context.user)
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container className="has-background-white-ter">
                    {/* short circuit will delay render until data has been fetched */}
                    {/* {this.state && this.state.user && */}
                    <CurrentUser.Consumer>
                        {({ user }) =>
                        <UserBox
                            key={user._id}
                            name={user.name}
                            email={user.email}
                            phone={user.phone}
                            address={user.address}
                        >
                        </UserBox>
                        }
                    </CurrentUser.Consumer>
                    {/* } */}
                    {/* short circuit will delay... will only render if user is client */}
                    {this.state && this.state.user && this.state.user.pets &&
                        <ClientBox
                            key={this.state.user._id}
                            pets={this.state.user.pets}
                            contact={this.state.user.emergencyContact[0].name}
                        />
                    }
                </Container>
            </React.Fragment>
        );
    }
}
Profile.contextType = CurrentUser;
export default Profile;
