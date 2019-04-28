import React from "react";
import { Button } from "react-bulma-components/full";

function VisitCard(props) {
    return (
        <div className="card">
            <header className=
                // background color changes based on state of visit
                {props.cancelStat ? "card-header has-background-danger" :
                    (props.completeStat ? "card-header has-background-success" :
                        (props.arriveStat ? "card-header has-background-info" : "card-header"))}>
                
                {// client will see name of employee visiting, employee will see name and address of client to visit
                    props.type ?
                        (<p className="card-header-title">
                            {props.time} visit by {props.employeeName}
                        </p>)
                        :
                        (<p className="card-header-title">
                            {props.time} visit for {props.clientName} at {props.address}
                        </p>)
                }
                <a href="valid" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    {props.arriveStat && <p className="has-text-dark">Arrived at: {props.arriveTime}</p>}
                    {props.arriveStat && <p className="has-text-dark">Completed at: {props.completeTime}</p>}
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