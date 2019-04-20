import axios from "axios";
import setAuthToken from "./setAuthToken";
import jwt_decode from "jwt-decode";
// import {
//   GET_ERRORS,
//   SET_CURRENT_USER,
//   USER_LOADING
// } from "./types";
// Register User
export const registerUser = (userData, history) => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/")) // re-direct to login on successful register
    .catch(error => {
      this.setState({
        errors: error.response.status
      }, () => {
        console.error(this.state.errors);
      });
    });
};
// Login - get user token
export const loginUser=(userData)=>{
      axios
          .post("/api/users/login", userData)
          .then(res => {
              // Save to localStorage
              // Set token to localStorage
              const { token } = res.data;
              sessionStorage.setItem("jwtToken", token);
              // Set token to Auth header
              setAuthToken(token);
              // Decode token to get user data
              const decoded = jwt_decode(token);
              console.log(decoded);
              // Set current user
              // dispatch(setCurrentUser(decoded));
          })
          .catch(error => {
              this.setState({
                errors: error.response.status
              }, () => {
                console.error(this.state.errors);
              });
            });
  };
// // Set logged in user
// export const setCurrentUser = decoded => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded
//   };
// };
// // User loading
// export const setUserLoading = () => {
//   return {
//     type: USER_LOADING
//   };
// };
// // Log user out
export const logoutUser = () => {
  // Remove token from local storage
  sessionStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // set isUser to false
  // dispatch(setCurrentUser({}));
};