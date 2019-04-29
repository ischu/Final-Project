import React from 'react';
import { Level } from 'react-bulma-components';
import UserBox from './UserBox';
// TODO
// Create collapsible cards for pets and contacts
function ClientBox(props) {
    return (
        <React.Fragment>
            <Level>
                <div className="level-item has-text-centered has-background-primary">
                    <p className="title">Pet Info</p>
                </div>
            </Level>
            <div className="columns">
                <div className="column is-12">
                    {props.pets.map((pet) =>
                        <React.Fragment>
                            <UserBox
                                key={pet._id}
                                name={pet.name}
                                headingTwo="breed"
                                address={pet.breed}
                                headingThree="gender"
                                email={pet.sex}
                                headingFour="age"
                                phone={pet.age}
                            >
                            </UserBox>
                            <hr></hr>
                        </React.Fragment>
                    )}
                </div>
            </div>
            <Level>
                <div className="level-item has-text-centered has-background-primary">
                    <p className="title">Emergency Contact</p>
                </div>
            </Level>
            <div className="columns">
                <div className="column is-12">
                    {/* <p className="heading has-text-primary">Emergency Contact</p> */}
                    {props.contact.map((info) =>
                        <UserBox
                            key="1"
                            name={info.name}
                            headingTwo="address"
                            address={info.address}
                            headingThree="email"
                            email={info.email}
                            headingFour="phone"
                            phone={info.phone}
                            convertPhone={props.convertPhone}
                            isPet={false}
                        // type={type}
                        >
                        </UserBox>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}
export default ClientBox;