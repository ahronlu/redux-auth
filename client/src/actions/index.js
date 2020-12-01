import axios from "axios";
const { AUTH_USER, AUTH_ERROR } = require("./types");

export const signup = (user, cb) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3090/signup", user);
    dispatch({ type: AUTH_USER, payload: data });
    localStorage.setItem("token", data.token);
    cb();
  } catch (error) {
    console.error(error);
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const signin = (user, cb) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3090/signin", user);
    dispatch({ type: AUTH_USER, payload: data });
    localStorage.setItem("token", data.token);

    cb();
  } catch (error) {
    console.error(error);
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return { type: AUTH_USER, payload: "" };
};
