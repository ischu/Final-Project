import React from "react";
import { Container } from "react-bulma-components/full";
import NavBar from "../components/NavBar";
import VisitCard from "../components/VisitCard";
import CurrentUser from "../AppContext";

function Schedule() {
    return (
      <Container className="has-background-white-ter">
      <NavBar></NavBar>
      <CurrentUser.Consumer>
        {({user})=>
        user.schedule.map(visit=>
        <VisitCard
        name={user.name}
        address={user.address}
        time={visit.time}
        date={visit.date}
        arrive={visit.arrive}
        complete={visit.complete}
        cancelled={visit.cancelled}
        />
        )
        }
      </CurrentUser.Consumer>
      </Container>
    );
}

export default Schedule;
