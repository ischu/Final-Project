import React from 'react';
import { Level } from 'react-bulma-components';

function ClientBox(props) {
    return (
        <React.Fragment>
            <Level>
                <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">name</p>
                        <p class="title">Example O. Name</p>
                    </div>
                </div>
            </Level>
            <Level>
                <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">email</p>
                        <p class="title">example@email.com</p>
                    </div>
                </div>
                <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">phone</p>
                        <p class="title">(111) 222-3333</p>
                    </div>
                </div>
            </Level>
            <Level>
            <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">address</p>
                        <p class="title">101 Street Ave.</p>
                    </div>
                </div>
            </Level>
        </React.Fragment>
    )
}
export default ClientBox;