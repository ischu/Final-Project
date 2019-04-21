import React from 'react';
import { Level } from 'react-bulma-components';

function ClientBox(props) {
    return (
        <React.Fragment>

            <Level>
                <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">Pets</p>
                        <p class="title">Dog</p>
                    </div>
                </div>
            </Level>
            <Level>
                <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">Emergency Contact</p>
                        <p class="title">Mom</p>
                    </div>
                </div>
            </Level>
            <Level>
            <div class="level-left level-item">
                    <div>
                        <p class="heading has-text-primary">Visits</p>
                        <p class="title">Link</p>
                    </div>
                </div>
            </Level>
        </React.Fragment>
    )
}
export default ClientBox;