import React from "react";
import { Button } from "react-bulma-components/full";

function VisitCard(props) {
    return (
        <div className= "card">
            <header className=
                        // background color changes based on state of visit
                        {props.cancelStat ? "card-header has-background-danger" :
                        (props.completeStat ? "card-header has-background-success" :
                            (props.arriveStat ? "card-header has-background-info" : "card-header"))}>
                <p className="card-header-title">
                    Visit for {props.name} at {props.address}
                </p>
                <a className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>{props.time}</p>
                    <br/>
                    {props.arriveStat && <p>Arrived at: {props.arriveTime}</p>}
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