import React from "react";
import { Button } from "react-bulma-components/full";

function VisitCard(props) {
    return (
        <div className=
            {props.completeStat ? "card visitCard-success" :
                (props.cancelStat ? "card visitCard-danger" :
                    (props.arriveStat ? "card visitCard-info" : "card visitCard1"))}>
            <header className=
                // background color changes based on state of visit
                {props.completeStat ? "card-header has-background-success" :
                    (props.cancelStat ? "card-header has-background-danger" :
                        (props.arriveStat ? "card-header has-background-info" : "card-header has-background-white-ter"))}>

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
                {/* clients can click to cancel visit */}
                {// cancel button only available before arrival
                    props.arriveStat || props.completeStat || props.cancelStat ?
                            <React.Fragment />
                            :
                            props.type ?
                                (
                                    <div className="column is-2 is-offset-1 button-item">
                                        {props.updateVisit(props.id, "cancel", props.showVisit)}
                                    </div>
                                )
                                :
                                (<React.Fragment />)
                }
                {/* <a className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a> */}
            </header>
            <div className="card-content background-is-white-ter">
                <div className="content">
                    <div className="columns">
                        <div className="column">
                            {props.visitType}
                        </div>
                        <div className="column">
                            {props.arriveStat ? (<p className="has-text-dark">Arrived at: {props.timeFormat(props.arriveTime)}</p>) : <p></p>}
                        </div>
                        <div className="column">
                            {props.completeStat ? (<p className="has-text-dark">Completed at: {props.timeFormat(props.completeTime)}</p>)
                                : (props.cancelStat ? (<p className="has-text-danger">Cancelled</p>) : <p></p>)}
                        </div>
                        {/* info button */}
                        {props.type ?
                            <div className="column">
                                <Button id="button-item" className="has-text-center is-fullwidth button is-dark is-inverted">
                                    Handler Info
                                </Button>
                            </div> :
                            <div className="column">
                                <Button id="button-item" className="has-text-center is-fullwidth button is-dark is-inverted">
                                    Client Info
                                </Button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {/* clients do not see footer with update visit buttons 
                completed and cancelled visits do not show buttons*/}
            {props.type || props.completeStat || props.cancelStat ?
                <React.Fragment />
                :
                (<footer className="card-footer has-background-white-ter">
                    {props.arriveStat ?
                        <div id="button-item" className="card-footer-item">
                            {props.updateVisit(props.id, "complete", props.showVisit)}
                        </div>
                        :
                        <div id="button-item" className="card-footer-item ">
                            {props.updateVisit(props.id, "arrive", props.showVisit)}
                        </div>
                    }
                    {/* NYI
                <Button className="card-footer-item has-text-success">
                    <span>Change</span>
                </Button> */}
                    <div id="button-item" className="card-footer-item">
                        {props.updateVisit(props.id, "cancel", props.showVisit)}
                    </div>
                </footer>)
            }
        </div >
    )

};

export default VisitCard;