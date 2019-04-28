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
                    {props.arriveStat && <p className="has-text-dark">Arrived at: {props.arriveTime}</p>}
                    {props.arriveStat && <p className="has-text-dark">Completed at: {props.completeTime}</p>}
                </div>
            </div>
            <footer className="card-footer has-background-white-ter">
                <div id="button-item" className="card-footer-item ">
                    {
                        props.arriveStat ?
                            (<Button className="has-text-center is-success is-fullwidth"
                                onClick={props.updateVisit(props.id, "complete")}>
                                <strong>Complete</strong>
                            </Button>)
                            :
                            (<Button className="has-text-center is-info is-fullwidth"
                                onClick={props.updateVisit(props.id, "arrive")}>
                                <strong>Arrive</strong>
                            </Button>)
                    }
                </div>
                {/* NYI
                <Button className="card-footer-item has-text-success">
                    <span>Change</span>
                </Button> */}
                <div id="button-item" className="card-footer-item ">
                    <Button className="has-text-center is-danger is-fullwidth">
                        <strong>Cancel</strong>
                    </Button>
                </div>
            </footer>
        </div >
    )

};

export default VisitCard;