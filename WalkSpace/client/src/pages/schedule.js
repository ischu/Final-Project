import React from "react";
import { Container, Level, Button } from "react-bulma-components/full";
import { getDaysVisits, updateVisit, resetAllVisits } from "../utils/docController";
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
      visits: [],
      // modalActive: false
    };
  }
  async componentDidMount() {
    console.log(this.state.date + "DATE")
    // component mounts with today's visits shown
    const today = new Date()
    // const user = await this.userFunc(this.context.user.type)
    const setStates = await this.changeDate(today)
    console.log(setStates)
  };
  userFunc = (date) => {
    this.changeDate(date).then(res => this.showVisits())
  }
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
  updateButtonClick = (visitId, action, cb) => {
    // click handler for "update visit" buttons
    function handleClick(e) {
      e.preventDefault();
      updateVisit(visitId, action).then(cb())
      console.log('The button was clicked.');
    }
    // colors button 
    function buttonColor(action) {
      switch (action) {
        case "arrive":
          return "has-text-center is-inverted is-fullwidth is-info";
        case "complete":
          return "has-text-center is-inverted is-fullwidth is-success";
        case "cancel":
          return "has-text-center is-inverted is-fullwidth is-danger";
        default:
          return "has-text-center is-inverted is-fullwidth is-primary"
      }
    }
    return (
      <Button id={visitId} onClick={handleClick} className={buttonColor(action)}>
        <strong>{action}</strong>
      </Button>
    );
  }
  // close modal if open, open modal if closed
  // switchModal=()=>{
  //   if (this.state.modalActive) {
  //     this.setState({ modalActive: false })
  //   } else{
  //     this.setState({ modalActive: true })
  //   }
  // }


  // infoButtonClick = (index, cb) => {
  //   function handleClick(e) {
  //     e.preventDefault();
  //     this.fillModal(e.target.index).then(cb())
  //     console.log('The info button was clicked.');
  //   }
  //   function fillModal(index) {
  //     const thisClient = this.visit[index].client
  //     return (
  //       <UserBox
  //         key={thisClient._id}
  //         name={thisClient.name}
  //         headingTwo="address"
  //         address={thisClient.address}
  //         headingThree="email"
  //         email={thisClient.email}
  //         headingFour="phone"
  //         phone={thisClient.phone}
  //         convertPhone={this.convertPhone}
  //       >
  //       </UserBox>
  //     );
  //   }
  // }
  secretClick(e) {
    e.preventDefault()
    resetAllVisits()
    console.log("secret click")
  }
  render() {
    let slashDate = this.state.date.toLocaleDateString();
    let visits = this.state.visits;
    let visitCount = this.state.visits.length;
    var noVisitDay = (visitCount === 0) ? true : false;
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Level id="calendarLevel">
          <div id="calendarLevel" className="level-item">
            <Calendar id="calendar"
              calendarType="US"
              onChange={this.changeDate}
              value={this.state.date}
            />
          </div>
        </Level>
        <Container className="has-background-white-bis">
          {/* Top title-bar, with the days date */}
          <Level>
            <div className="level-item has-background-white-bis">
              <p id="levelWords" className="title has-text-grey-dark">{slashDate}</p>
            </div>
          </Level>
          {/* only loads after context and visits are loaded */}
          {this.context.type && this.state.visits &&
            noVisitDay ?
            <Container>
              <Level className="has-text-centered">
                <p onClick={this.secretClick} id="levelWords" className="level-item title has-text-grey-dark">No Visits Today!</p>
              </Level>
            </Container>
            :
            visits.map((visit, index) =>
              <VisitCard
                key={visit._id}
                // id for targeting click events
                id={visit._id}
                // changes how cards render- boolean
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
                // client and employee contact info
                handPhone={visit.employee.phone}
                handEmail={visit.employee.email}
                cliPhone={visit.client.phone}
                cliEmail={visit.client.email}
                shouldHide={false}
                // turns on modal
                // infoClick={this.infoButtonClick}
                // modalSwitch={this.switchModal}
                // index for populating modal
                // index={index}

              />
            )
          }
        </Container>
      </React.Fragment>
    );
  }
}
Schedule.contextType = CurrentUser;
export default Schedule;
