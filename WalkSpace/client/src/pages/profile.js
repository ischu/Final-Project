import React, { Component } from "react";
import { Container } from "react-bulma-components/full";
import NavBar from "../components/NavBar";
import UserBox from "../components/UserBox";
import ClientBox from "../components/ClientBox";
import CurrentUser from "../AppContext";

class Profile extends Component {

    componentDidMount() {

    }

    render() {
        console.log(this.context.user)
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container className="has-background-white-ter">
                    {/* short circuit will delay render until data has been fetched */}
                    {this.context.user &&
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
                    }
                    {/* this section will only render if user is client (only clients have pets) */}
                    {this.context.user.pets &&
                        <ClientBox
                            key={this.context.user._id}
                            pets={this.context.user.pets}
                            contact={this.context.user.emergencyContact[0].name}
                        />
                    }
                </Container>
            </React.Fragment>
        );
    }
}
Profile.contextType = CurrentUser;
export default Profile;
