import React from "react";
import { Container, Level } from "react-bulma-components/full";
import { getDaysVisits } from "../utils/docController";
import Calendar from 'react-calendar';
import NavBar from "../components/NavBar";
import VisitCard from "../components/VisitCard";
import CurrentUser from "../AppContext";

class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      // schedule defaults to today's date
      date: new Date(),
      // empty array, api call will fill with the selected date's visits
      visits: []
    };
  }
  componentDidMount() {
    console.log(this.state.date + "DATE")
    // finds visits for selected date for the logged in user (by id)
    getDaysVisits(this.state.date, this.context.type, this.context.user._id, this.dateClick);
  };
  // get visits for selected day
  showVisits = () => { getDaysVisits(this.state.date, this.context.type, this.context.user._id, this.dateClick) }
  // for setting date state with calendar
  onChange = date => {
    this.setState({ date })
    this.showVisits()
  };
  // ?
  dateClick = daysVisits => this.setState({ visits: daysVisits })
  // Converts timestamp strings into local HH:mm AM/PM format
  localTime = (d) => {
    let date = new Date(d);
    let timeString = date.toLocaleTimeString('en-US');
    let secondlessString = timeString.replace(/:\d+\s/g, " ");
    return secondlessString;
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
        return "Midday"
    }
  }
  render() {
    let visits = this.state.visits;
    let slashDate = this.state.date.toLocaleDateString();
    return (

      <Container className="has-background-white-ter">
        <NavBar></NavBar>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        {/* Top level title-bar, with the days date */}
        <Level>
          <div className="level-item has-background-primary">
            <p className="title">{slashDate}</p>
          </div>
        </Level>
        {this.state.visits &&
          visits.map((visit) =>
            <VisitCard
              key={visit._id}
              // changes how cards render
              type={this.isClient(this.context.type)}
              clientName={visit.client.name}
              employeeName={visit.employee.name}
              address={visit.client.address}
              time={this.visitTime(visit.timeBlock)}
              date={visit.date}
              // statuses are boolean
              arriveStat={visit.arrive.status}
              completeStat={visit.complete.status}
              cancelStat={visit.cancel.status}
              // allow employee to keep track of time and client to check visit's time
              arriveTime={this.localTime(visit.arrive.timestamp) || "error"}
              completeTime={this.localTime(visit.complete.timestamp) || "error"}
              cancelTime={this.localTime(visit.cancel.timestamp) || "error"}
            />
          )
        }
      </Container>
    );
  }
}
Schedule.contextType = CurrentUser;
export default Schedule;
