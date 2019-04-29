import React from 'react';
import { Level } from 'react-bulma-components';
import UserBox from './UserBox';
// TODO
// Create collapsible cards for pets and contacts
function ClientBox(props) {
    return (
        <React.Fragment>

            <div className="columns">
                <div className="column is-4 is-offset-1">
                    <p className="heading has-text-primary">Pets</p>
                    {props.pets.map((pet) =>
                        <p key={pet._id} className="title">{pet.name}</p>
                    )}
                </div>
            </div>
            {/* turn these sections into userboxes */}
            <div className="columns">
                <div className="column is-12">
                    {/* <p className="heading has-text-primary">Emergency Contact</p> */}
                    {props.contact.map((info) =>
                        <UserBox
                            key="1"
                            section="Emergency Contact"
                            name={info.name}
                            email={info.email}
                            phone={info.phone}
                            address={info.address}
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