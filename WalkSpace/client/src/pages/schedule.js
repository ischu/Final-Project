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
        user={user.name}
        time={visit.time}
        arrive={visit.arrive}
        complete={visit.complete}
        />
        )
        }
      </CurrentUser.Consumer>
      </Container>
    );
}

export default Schedule;
