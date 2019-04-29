import React, { Component } from "react";
import { Container } from "react-bulma-components/full";
import NavBar from "../components/NavBar";
import UserBox from "../components/UserBox";
import ClientBox from "../components/ClientBox";
import CurrentUser from "../AppContext";

class Profile extends Component {

    componentDidMount() {
    }
    convertPhone = (number) => {
        let num = number.toString();
        let areaCode = num.slice(0, 3);
        let middleThree = num.slice(3, 6);
        let lastFour = num.slice(6, 10);
        let phoneFormat = `(${areaCode}) ${middleThree}-${lastFour}`;
        return phoneFormat
    }
    render() {
        console.log(this.context.user)
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container className="has-background-white-ter">
                    {/* short circuit will delay render until data has been fetched */}
                    {this.context.user && this.context.user.phone &&
                        <CurrentUser.Consumer>
                            {({ user, type }) =>
                                <UserBox
                                    section="Profile"
                                    key={user._id}
                                    name={user.name}
                                    email={user.email}
                                    phone={user.phone}
                                    address={user.address}
                                    convertPhone={this.convertPhone}
                                    type={type}
                                    isPet={false}
                                >
                                </UserBox>
                            }
                        </CurrentUser.Consumer>
                    }
                    {/* this section will only render if user is client */}
                    {this.context.user && this.context.type === "client" && this.context.user.pets &&
                        <ClientBox
                            key={this.context.user._id}
                            pets={this.context.user.pets}
                            contact={this.context.user.emergencyContact}
                            convertPhone={this.convertPhone}
                        />
                    }
                </Container>
            </React.Fragment>
        );
    }
}
Profile.contextType = CurrentUser;
export default Profile;
