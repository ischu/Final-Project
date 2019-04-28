import axios from "axios";

export const getClientByEmail = (email, func) => {
  axios
    .get("/Clients/" + email)
    .then(function (res) {
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
    .get("/Employees/" + email)
    .then(function (res) {
      if (res.data) {
        console.log(res.data);
        func(res.data);
        return
      }
    })
    .catch(error => {
      // this.setState({
      //   errors: error.response.status
      // }, () => {
      console.error(error);
      // });
    });
};
// checks both client and employee collections for user's document
export const getDocByEmail = (email, func) => {
  axios
    .get("/Employees/" + email)
    .then(function (res) {
      if (res.data) {
        console.log(res.data);
        // func is setUser function from App.js (also sets "type")
        func(res.data, "employee");
        return
      }
    }).then(  
      axios
      .get("/Clients/" + email)
      .then(function (res) {
        if (res.data) {
          console.log(res.data);
          func(res.data, "client");
          return
        }
      })
      )
    .catch(error => {
      console.error(error);
    });
}
export const getDaysVisits = (date, userType, user, cb) => {
  axios
    // date.toISOString().substring(0, 10) converts the date to proper format and removes the "oclock" part
    .get(`/UserVisitsOnDate?${userType}=${user}&date=${date.toISOString().substring(0, 10)}`)
    .then(function (res) {
      console.log(res.data);
      console.log(date.toISOString())
      const visits = res.data;
      
      return visits
    }).then((visits)=>{cb(visits);})
    .catch(error => {
      // this.setState({
      //   errors: error.response.status
      // }, () => {
      console.error(error);
      // });
    });
};
export const updateVisit = (id, action) =>{
  axios
    .put(`MarkVisit?id=${id}&field=${action}`);
} 