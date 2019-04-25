import React from "react";
import { Button } from "react-bulma-components/full";

function VisitCard(props) {
    return (
        <div className=
            // background color changes based on state of visit
            {props.cancelled ? "card has-background-danger" :
                (props.complete ? "card has-background-success" :
                    (props.arrive ? "card has-background-info" : "card"))}>
            <header className="card-header">
                <p className="card-header-title">
                    Visit for {props.name}
                </p>
                <a className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    {props.time}
                    <br />
                    <time datetime="2016-1-1">{props.date}</time>
                </div>
            </div>
            <footer className="card-footer has-background-white-ter">
                <Button className="card-footer-item has-text-info">
                    <span>Arrive</span>
                </Button>
                <Button className="card-footer-item has-text-success">
                    <span>Change</span>
                </Button>
                <Button className="card-footer-item has-text-danger">
                    <span>Cancel</span>
                </Button>
            </footer>
        </div >
    )

};

export default VisitCard;