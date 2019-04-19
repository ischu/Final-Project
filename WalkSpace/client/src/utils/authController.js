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
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      console.log(err.response.data)
    );
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
              // Set current user with Context
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
// export const logoutUser = () => dispatch => {
//   // Remove token from local storage
//   localStorage.removeItem("jwtToken");
//   // Remove auth header for future requests
//   setAuthToken(false);
//   // Set current user to empty object {} which will set isAuthenticated to false
//   dispatch(setCurrentUser({}));
// };