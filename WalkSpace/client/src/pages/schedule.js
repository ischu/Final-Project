import React from "react";
import { Container } from "react-bulma-components/full";
import VisitCard from "../components/VisitCard";

function Schedule(props) {
    return (
      <Container className="has-background-white-ter">
        {/* {props.visits.map(visit=>
        <VisitCard
        user={props.user.name}
        time={visit.time}
        arrive={visit.arrive}
        complete={visit.complete}
        />
        )} */}
      </Container>
    );
}

export default Schedule;
