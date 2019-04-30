import React, { Component } from "react";
import { Section, Container, Level } from "react-bulma-components/full";
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
                <Section >
                    <Container id="profileContainer" className="has-background-white-bis">
                        <Level>
                            <div className="level-item has-text-centered has-background-grey-dark">
                                <p id="levelWords" className="title has-text-white-bis">Profile</p>
                            </div>
                        </Level>
                        {/* short circuit will delay render until data has been fetched */}
                        {this.context.user && this.context.user.phone &&
                            <CurrentUser.Consumer>
                                {({ user }) =>
                                    <UserBox
                                        key={user._id}
                                        name={user.name}
                                        headingTwo="address"
                                        address={user.address}
                                        headingThree="email"
                                        email={user.email}
                                        headingFour="phone"
                                        phone={user.phone}
                                        convertPhone={this.convertPhone}
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
                </Section>
            </React.Fragment>
        );
    }
}
Profile.contextType = CurrentUser;
export default Profile;
