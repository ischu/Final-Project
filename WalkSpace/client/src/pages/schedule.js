import React from "react";
import { Container, Level } from "react-bulma-components/full";
import Calendar from 'react-calendar';
import NavBar from "../components/NavBar";
import VisitCard from "../components/VisitCard";
import CurrentUser from "../AppContext";

class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    let context = this.context;
    this.setState({ user: context.user })
    console.log(this.state.date + "DATE")
  };
  onChange = date => this.setState({ date })
  render() {
    let today = this.state.date.toLocaleDateString();
    return (
      
      <Container className="has-background-white-ter">
        <NavBar></NavBar>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        {/* Top level title-bar, with the days date */}
        {/* <CurrentUser.Consumer>
          {({ user }) => */}
            <Level>
              <div className="level-item has-background-primary">
                <p className="title">{today}</p>
              </div>
            </Level>
          {/* }
        </CurrentUser.Consumer> */}
        {this.state.user &&
          <CurrentUser.Consumer>
            {/* Generates Schedule list from array of visits */}
            {({ user }) =>
              // user.schedule.map(visit =>
              //   <VisitCard
              //     name={user.name}
              //     address={user.address}
              //     time={visit.time}
              //     date={visit.date}
              //     arrive={visit.arrive}
              //     complete={visit.complete}
              //     cancelled={visit.cancelled}
              //   />
              // )
              <div>{user.name}</div>
            }
          </CurrentUser.Consumer>
        }
      </Container>
    );
  }
}
Schedule.contextType = CurrentUser;
export default Schedule;
