import React from "react";
import { Button } from "react-bulma-components/full";

function VisitCard(props) {
    return (
        <div className="card visitCard">
            <header className=
                // background color changes based on state of visit
                {props.cancelStat ? "card-header has-background-danger" :
                    (props.completeStat ? "card-header has-background-success" :
                        (props.arriveStat ? "card-header has-background-info" : "card-header"))}>

                {// client will see name of employee visiting, employee will see name and address of client to visit
                    props.type ?
                        (<p className="card-header-title">
                            {props.time} Visit by {props.employeeName}
                        </p>)
                        :
                        (<p className="card-header-title">
                            {props.time} Visit for {props.clientName} at {props.address}
                        </p>)
                }
                <a className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    <div className="columns">
                        <div className="column">
                        {props.arriveStat ? (<p className="has-text-dark">Arrived at: {props.timeFormat(props.arriveTime)}</p>) : <p></p>}
                        </div>
                        <div className="column">
                        {props.completeStat ? (<p className="has-text-dark">Completed at: {props.timeFormat(props.completeTime)}</p>) : <p></p>}
                        </div>
                        <div className="column">
                            Visit type: {props.visitType}
                        </div>
                        <div className="column">
                            <Button>More Info</Button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="card-footer has-background-white-ter">
                <div id="button-item" className="card-footer-item ">
                    {props.updateVisit(props.id, "arrive", "info")}
                </div>
                <div id="button-item" className="card-footer-item">
                    {props.updateVisit(props.id, "complete", "success")}
                </div>
                {/* NYI
                <Button className="card-footer-item has-text-success">
                    <span>Change</span>
                </Button> */}
                <div id="button-item" className="card-footer-item">
                    {props.updateVisit(props.id, "cancel", "danger")}
                </div>
            </footer>
        </div >
    )

};

export default VisitCard;