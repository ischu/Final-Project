import React from "react";
import { Button } from "react-bulma-components/full";

class VisitCard extends React.Component {
    constructor() {
        super();
        this.state = {
            shouldHide: true,
            noneStyle: {
                display: "none"
            },
            flexStyle: {
                display: "flex"
            }
        };
    }
    componentDidMount(){
        this.setState({ shouldHide: true })
    }
    convertPhone = (number) => {
        let num = number.toString();
        let areaCode = num.slice(0, 3);
        let middleThree = num.slice(3, 6);
        let lastFour = num.slice(6, 10);
        let phoneFormat = `(${areaCode}) ${middleThree}-${lastFour}`;
        return phoneFormat
    }
    switchHide = () => {
        // e.preventDefault();
        console.log("INFO")
        if(this.state.shouldHide){
            this.setState({ shouldHide: false })
        }else{
            this.setState({ shouldHide: true })
        }
        this.props.showVisit()
    }

    render() {
        return (
            <div className=
                {this.props.completeStat ? "card visitCard-success" :
                    (this.props.cancelStat ? "card visitCard-danger" :
                        (this.props.arriveStat ? "card visitCard-info" : "card visitCard1"))}>
                <header className=
                    // background color changes based on state of visit
                    {this.props.completeStat ? "card-header has-background-success" :
                        (this.props.cancelStat ? "card-header has-background-danger" :
                            (this.props.arriveStat ? "card-header has-background-info" : "card-header has-background-white-ter"))}>

                    {// client will see name of employee visiting, employee will see name and address of client to visit
                        this.props.type ?
                            (<p className="card-header-title">
                                {this.props.time} Visit by {this.props.employeeName}
                            </p>)
                            :
                            (<p className="card-header-title">
                                {this.props.time} Visit for {this.props.clientName} at {this.props.address}
                            </p>)
                    }
                    {/* clients can click to cancel visit */}
                    {// cancel button only available before arrival
                        this.props.arriveStat || this.props.completeStat || this.props.cancelStat ?
                            <React.Fragment />
                            :
                            this.props.type ?
                                (
                                    <div className="column is-2 is-offset-1 button-item">
                                        {this.props.updateVisit(this.props.id, "cancel", this.props.showVisit)}
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
                        {/* visit info columns */}
                        <div className="columns">
                            <div className="column">
                                {this.props.visitType}
                            </div>
                            <div className="column">
                                {this.props.arriveStat ? (<p className="has-text-dark">Arrived at: {this.props.timeFormat(this.props.arriveTime)}</p>) : <p></p>}
                            </div>
                            <div className="column">
                                {this.props.completeStat ? (<p className="has-text-dark">Completed at: {this.props.timeFormat(this.props.completeTime)}</p>)
                                    : (this.props.cancelStat ? (<p className="has-text-danger">Cancelled</p>) : <p></p>)}
                            </div>
                            {/* info button */}

                            {this.props.type ?
                                <div className="column">
                                    <Button
                                        id="button-item" onClick={this.switchHide}
                                        className="has-text-center is-fullwidth button is-dark is-inverted">
                                        Handler Info
                                    </Button>
                                </div> :
                                <div className="column">
                                    <Button
                                        id="button-item" onClick={this.switchHide}
                                        className="has-text-center is-fullwidth button is-dark is-inverted">
                                        Client Info
                                    </Button>
                                </div>
                            }
                        </div>
                    {/* client/employee info - hides/shows when info button is clicked */}
                    <div className="columns" style={this.state.shouldHide ? this.state.noneStyle : this.state.flexStyle} >
                        {this.props.type ?
                            <React.Fragment>
                                <div className="column is-4 is-offset-2">
                                    Handler Phone: {this.convertPhone(this.props.handPhone)}
                                </div>
                                <div className="column is-4 is-offset-1">
                                    Handler email: {this.props.handEmail}
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div className="column is-4 is-offset-2">
                                    Client Phone: {this.convertPhone(this.props.cliPhone)}
                                </div>
                                <div className="column is-4 is-offset-1">
                                    Client email: {this.props.cliEmail}
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </div>
                {/* clients do not see footer with update visit buttons 
                completed and cancelled visits do not show buttons*/}
                {this.props.type || this.props.completeStat || this.props.cancelStat ?
                    <React.Fragment />
                    :
                    (<footer className="card-footer has-background-white-ter">
                        {this.props.arriveStat ?
                            <div id="button-item" className="card-footer-item">
                                {this.props.updateVisit(this.props.id, "complete", this.props.showVisit)}
                            </div>
                            :
                            <div id="button-item" className="card-footer-item ">
                                {this.props.updateVisit(this.props.id, "arrive", this.props.showVisit)}
                            </div>
                        }
                        {/* NYI
                <Button className="card-footer-item has-text-success">
                    <span>Change</span>
                </Button> */}
                        <div id="button-item" className="card-footer-item">
                            {this.props.updateVisit(this.props.id, "cancel", this.props.showVisit)}
                        </div>
                    </footer>)
                }
            </div >
        )
    }
};

export default VisitCard;