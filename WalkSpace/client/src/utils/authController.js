import axios from "axios";
import setAuthToken from "./setAuthToken";
import jwt_decode from "jwt-decode";

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
export const loginUser = (userData, history, setErr, cb) => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to sessionStorage
      const { token } = res.data;
      sessionStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Callback to set context *after* call is made
      cb();
      // routes to profile page
      history.push("/profile")
    })
    // Sets login error state- passes to frontend validation
    .catch(error => {
      setErr(
        error.response.data
      )
      //   console.error(
      //   this.state.errors,
      //   error.response.status
      // );
    })
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