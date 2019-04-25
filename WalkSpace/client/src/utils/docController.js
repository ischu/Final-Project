import axios from "axios";

export const getClientByEmail = (email, func) => {
    axios
      .get("/Clients/"+email)
      .then(function(res){
          console.log(res.data);
          func(res.data);
      })
      .catch(error => {
        // this.setState({
        //   errors: error.response.status
        // }, () => {
          console.error(error);
        // });
      });
  };
  export const getEmployeeByEmail = (email, func) => {
    axios
      .get("/Employees/"+email)
      .then(function(res){
          console.log(res.data);
          func(res.data);
      })
      .catch(error => {
        // this.setState({
        //   errors: error.response.status
        // }, () => {
          console.error(error);
        // });
      });
  };
  export const getDaysVisits=(date, userType, user)=>{
    // // find vists by date assigned to user
    // app.get('/visits',function(req, res) {
    //   // userType will set to either client or employee field, depending on which is using app
    //   Visit.find({date: date, [userType]: user}, function(err, visits) 
    //   {
    //      if (err)
    //      {
    //          res.send(err);
    //      }
    //      console.log(visits);
    //      res.json(visits);
    //   });
    //  }); 
    axios
    .get("/VisitsMineDay/")
    .then(function(res){
        console.log(res.data);
        func(res.data);
    })
    .catch(error => {
      // this.setState({
      //   errors: error.response.status
      // }, () => {
        console.error(error);
      // });
    });
  };