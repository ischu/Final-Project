import React from "react";
import { Container, Level, Button } from "react-bulma-components/full";
import { getDaysVisits, updateVisit } from "../utils/docController";
import Calendar from 'react-calendar';
import NavBar from "../components/NavBar";
import VisitCard from "../components/VisitCard";
import CurrentUser from "../AppContext";

class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      // schedule defaults to today's date
      date: new Date(),
      // empty array, api call will fill with the selected date's visits
      visits: []
    };
  }
  async componentDidMount() {
    console.log(this.state.date + "DATE")
    // component mounts with today's visits shown
    const today = new Date()
    // const user = await this.userFunc(this.context.user.type)
    this.changeDate(today)
    // console.log(user)
  };
  // userFunc(){
  //   if(something === undefined){
  //     this.userFunc()
  //   }else if(something!==undefined){
  //     console.log("done")
  //     return true
  //   }
  // }
  // gets visits for selected date for the logged in user (by id)
  showVisits = () => { getDaysVisits(this.state.date, this.context.type, this.context.user._id, this.setVisits) }
  // sets up promise so date is set before vist is shown
  setDate = date => {
    this.setState({ date })
    // sets up promise so date is set before vist is shown
    return new Promise((resolve) => {
      resolve();
    });
  };
  // for setting date state with calendar
  changeDate = date => {
    console.log("change", this.context.user, this.context.type)
    this.setDate(date).then(res => this.showVisits())
  }
  // 
  setVisits = daysVisits => this.setState({ visits: daysVisits })
  // Converts timestamp strings into local HH:mm AM/PM format
  localTime = (d) => {
    console.log(d);
    // null dates were causing bug where it would return 7:00 PM (?)
    if (d === null) {
      console.log("null")
      return null
    } else {
      console.log("time")
      let date = new Date(d);
      let timeString = date.toLocaleTimeString('en-US');
      let secondlessString = timeString.replace(/:\d+\s/g, " ");
      return secondlessString;
    }
  }
  // turns context.type into a boolean- for rendering conditionals
  isClient = (type) => {
    if (type === "client") {
      return true
    } else {
      return false
    }
  }
  // converts "timeBlock codes" into equivalent words
  visitTime = (num) => {
    switch (num) {
      case 0:
        return "Morning";
      case 1:
        return "Midday";
      case 2:
        return "Evening";
      default:
        return " "
    }
  }
  // click handler for update visit buttons
  updateButtonClick=(id, action, cb)=>{
    function handleClick(e) {
      e.preventDefault();
      updateVisit(e.target.id, action).then(cb())
      console.log('The button was clicked.');
    }
    function buttonColor(action) {
      switch (action) {
        case "arrive":
          return "has-text-center is-fullwidth is-info";
        case "complete":
          return "has-text-center is-fullwidth is-success";
        case "cancel":
          return "has-text-center is-fullwidth is-danger";
        default:
          return "has-text-center is-fullwidth is-primary"
      }
    }
    return (
      <Button id={id} onClick={handleClick} className={buttonColor(action)}>
        <strong>{action}</strong>
      </Button>
    );
  }
  render() {
    let visits = this.state.visits;
    let slashDate = this.state.date.toLocaleDateString();
    if (this.state.loading === true) {
      return (
        <div>
          Loading
        </div>
      )
    } else if (this.state.loading === false)
      return (

        <Container className="has-background-white-ter">
          <NavBar></NavBar>
          <Level>
            <div className="level-item">
              <Calendar
                calendarType="US"
                onChange={this.changeDate}
                value={this.state.date}
              />
            </div>
          </Level>
          {/* Top level title-bar, with the days date */}
          <Level>
            <div className="level-item has-background-primary">
              <p className="title">{slashDate}</p>
            </div>
          </Level>
          {/* only loads after context and visits are loaded */}
          {this.context.type && this.state.visits &&
            visits.map((visit) =>
              <VisitCard
                key={visit._id}
                // changes how cards render
                type={this.isClient(this.context.type)}
                // card info
                clientName={visit.client.name}
                employeeName={visit.employee.name}
                address={visit.client.address}
                time={this.visitTime(visit.timeBlock)}
                date={visit.date}
                visitType={visit.type}
                // statuses are boolean
                arriveStat={visit.arrive.status}
                completeStat={visit.complete.status}
                cancelStat={visit.cancel.status}
                // allow employee to keep track of time and client to check visit's time
                arriveTime={visit.arrive.timestamp}
                completeTime={visit.complete.timestamp}
                cancelTime={visit.cancel.timestamp}
                timeFormat={this.localTime}
                updateVisit={this.updateButtonClick}
                showVisit={this.showVisits}
                // id for targeting click events
                id={visit._id}
              />
            )
          }
        </Container>
      );
  }
}
Schedule.contextType = CurrentUser;
export default Schedule;
