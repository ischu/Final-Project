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
    axios
    .get(`/Visits?date=${date}&${userType}=${user}`)
    .then(function(res){
        console.log(res.data);
        const visits = res.data;
        return visits;
    })
    .catch(error => {
      // this.setState({
      //   errors: error.response.status
      // }, () => {
        console.error(error);
      // });
    });
  };