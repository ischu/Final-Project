import React from 'react';
import { Level } from 'react-bulma-components';

function UserBox(props) {
    return (
        <React.Fragment>
            <Level>
                <div className="level-item has-text-centered has-background-primary">
                    <p className="title">Profile</p>
                </div>
            </Level>
            <Level>
                <div className="level-left level-item">
                    <div>
                        <p className="heading has-text-primary">name</p>
                        <p className="title">{props.name}</p>
                    </div>
                </div>
            </Level>
            <Level>
                <div className="level-left level-item">
                    <div>
                        <p className="heading has-text-primary">email</p>
                        <p className="title">{props.email}</p>
                    </div>
                </div>
                <div className="level-left level-item">
                    <div>
                        <p className="heading has-text-primary">phone</p>
                        <p className="title">{props.phone}</p>
                    </div>
                </div>
            </Level>
            <Level>
                <div className="level-left level-item">
                    <div>
                        <p className="heading has-text-primary">address</p>
                        <p className="title">{props.address}</p>
                    </div>
                </div>
            </Level>
        </React.Fragment>
    )
}
export default UserBox;