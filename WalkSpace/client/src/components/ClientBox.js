import React from 'react';
import { Level } from 'react-bulma-components';
// TODO
// Create collapsible cards for pets and contacts
function ClientBox(props) {
    return (
        <React.Fragment>

            <Level>
                <div className="level-left level-item">
                    <div>
                        <p className="heading has-text-primary">Pets</p>
                        {props.pets.map((pet) =>
                            <p className="title">{pet.name}</p>
                        )}
                    </div>
                </div>
            </Level>
            <Level>
                <div className="level-left level-item">
                    <div>
                        <p className="heading has-text-primary">Emergency Contact</p>
                        <p className="title">{props.contact}</p>
                    </div>
                </div>
            </Level>
            <Level>
                <div className="level-left level-item">
                    <div>
                        <p className="heading has-text-primary">Schedule</p>
                        <p className="title">Visit1</p>
                    </div>
                </div>
            </Level>
        </React.Fragment>
    )
}
export default ClientBox;