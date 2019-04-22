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
      // this.setState({
      //   errors: error.response.status
      // }, () => {
        console.error(error);
      // });
    });
};
// Login - get user token
export const loginUser = (userData, cb) => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to sessionStorage
      const { token } = res.data;
      sessionStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // set decoded email
      sessionStorage.setItem("email", decoded.email);
      console.log(decoded);
      // Callback to allow context to set after call is made
      cb();
    })
    // TODO: add error setState function
    .catch(error => {
      // this.setState({
      //   errors: error.response.status
      // }, () => 
      // {
        console.error(
          error
          // this.state.errors
          );
      // });
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