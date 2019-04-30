import React from 'react';
import { Level } from 'react-bulma-components';

function UserBox(props) {
    return (
        <React.Fragment>
            <div className="columns">
                <div className="column is-4 is-offset-1">
                    <div>
                        <p className="heading has-text-primary">
                            name
                        </p>
                        <p className="title">{props.name}</p>
                    </div>
                </div>
                <div className="column is-4 is-offset-2">
                    <p className="heading has-text-primary">
                        {props.headingTwo}
                    </p>
                    <p className="title">{props.address}</p>

                </div>
            </div>
            <div className="columns">
                <div className="column is-4 is-offset-1">
                    <div>
                        <p className="heading has-text-primary">
                            {props.headingThree}
                        </p>
                        <p className="title">{props.email}</p>
                    </div>
                </div>
                <div className="column is-4 is-offset-2">
                    <p className="heading has-text-primary">
                        {props.headingFour}
                    </p>
                    {props.isPet ?
                        <p className="title">{props.phone}</p>
                        :
                        <p className="title">{props.convertPhone(props.phone)}</p>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
export default UserBox;