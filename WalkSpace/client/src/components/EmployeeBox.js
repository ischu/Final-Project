import React from 'react';
import { Level } from 'react-bulma-components';

function EmployeeBox(props) {
    return (
        <React.Fragment>
            <Level>
                <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">name</p>
                        <p class="title">{props.name}</p>
                    </div>
                </div>
            </Level>
            <Level>
                <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">email</p>
                        <p class="title">{props.email}</p>
                    </div>
                </div>
                <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">phone</p>
                        <p class="title">{props.phone}</p>
                    </div>
                </div>
            </Level>
            <Level>
            <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">address</p>
                        <p class="title">{props.address}</p>
                    </div>
                </div>
            </Level>
        </React.Fragment>
    )
}
export default EmployeeBox;