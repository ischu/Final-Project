import axios from "axios";

export const getClientByEmail = (email) => {
    axios
      .get("/Clients/"+email)
      .then(function(res){
          console.log(res.data);
          return res.data
      })
      .catch(error => {
        // this.setState({
        //   errors: error.response.status
        // }, () => {
          console.error(error);
        // });
      });
  };