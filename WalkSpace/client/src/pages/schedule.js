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
    getDaysVisits(this.state.date, this.context.type, this.context.user.name, this.dateClick);
  };
  // componentDidUpdate() {
  //   getDaysVisits(this.state.date, this.context.type, this.context.user.name, this.dateClick);
  //   console.log("update")
  // }
  showVisits=()=>{getDaysVisits(this.state.date, this.context.type, this.context.user.name, this.dateClick)}
  onChange = date => 
  {this.setState({ date });
  this.showVisits()};
  dateClick = daysVisits => this.setState({visits:daysVisits})
  render() {
    let visits = this.state.visits;
    let slashDate = this.state.date.toLocaleDateString();
    return (
      
      <Container className="has-background-white-ter">
        <NavBar></NavBar>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClick={this.showVisits}
        />
        {/* Top level title-bar, with the days date */}
        {/* <CurrentUser.Consumer>
          {({ user }) => */}
            <Level>
              <div className="level-item has-background-primary">
                <p className="title">{slashDate}</p>
              </div>
            </Level>
          {/* }
        </CurrentUser.Consumer> */}
        {this.state.visits &&
          visits.map((visit) =>
                <VisitCard
                  name={visit.client}
                  address="{visit.address}"
                  time="{visit.time}"
                  date={visit.date}
                  arrive={false}
                  complete={false}
                  cancelled={false}
                />
          )
          }
      </Container>
    );
  }
}
Schedule.contextType = CurrentUser;
export default Schedule;
