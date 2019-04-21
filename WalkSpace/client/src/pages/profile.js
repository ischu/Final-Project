import React, { Component } from "react";
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
                email: "MrHappy@email.com",
                phone: "(666)-666-6666",
                address: "123 Vondee Ave."
            }
        }
    }
    // METHODS

    render() {
        // second half of profile page only loads if user is client
            let boxTwo;
            if(this.state.isClient){
               boxTwo = <ClientBox/>
            }else{
                boxTwo=<React.Fragment/>
            }
        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container className="has-background-white-ter">
                    {/* {this.state.images.map(image => (
                    <ImgCard
                        key={image.id}
                        id={image.id}
                        name={image.name}
                        url={image.url}
                        gameOver={this.state.gameOver}
                        correct={this.state.correct}
                        shuffle={this.clickFunc}
                    />
                ))} */}
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
