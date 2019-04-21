import React, { Component } from "react";
import { Container } from "react-bulma-components/full";
import EmployeeBox from "../components/EmployeeBox";

class Profile extends Component {
    // STATE
    constructor(props) {
        super(props)
        this.state = {
            client: null,
            // employee: null
            employee: {
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
        return (
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
                <EmployeeBox
                    key={this.state.employee.id}
                    name={this.state.employee.name}
                    email={this.state.employee.email}
                    phone={this.state.employee.phone}
                    address={this.state.employee.address}
                />
            </Container>
        );
    }
}

export default Profile;
