import React from 'react';
import { Level } from 'react-bulma-components';

function UserBox(props) {
    return (
        <React.Fragment>
            <Level>
                <div className="level-item has-text-centered has-background-primary">
                    <p className="title">{props.section}</p>
                </div>
            </Level>
            <div className="columns">
                <div className="column is-4 is-offset-1">
                    <div>
                        <p className="heading has-text-primary">name</p>
                        <p className="title">{props.name}</p>
                    </div>
                </div>
                <div className="column is-4 is-offset-2">
                    <div>
                        <p className="heading has-text-primary">address</p>
                        <p className="title">{props.address}</p>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-4 is-offset-1">
                    <div>
                        <p className="heading has-text-primary">email</p>
                        <p className="title">{props.email}</p>
                    </div>
                </div>
                <div className="column is-4 is-offset-2">
                    <p className="heading has-text-primary">phone</p>
                    <p className="title">{props.convertPhone(props.phone)}</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default UserBox;