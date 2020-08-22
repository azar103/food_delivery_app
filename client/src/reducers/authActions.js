import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_ADMIN_SUCCESS,
  LOGOUT_ADMIN_SUCCESS,
} from "./actionTypes";

import axios from "axios";
import { returnErrors } from "./errorActions";

export const registerUser = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  tel,
  address,
}) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    tel,
    address,
  });
  axios
    .post("/api/users/signup", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  axios
    .post("/api/users/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const loginAdmin = () => {
  return {
    type: LOGIN_ADMIN_SUCCESS,
  };
};

export const logoutAdmin = () => {
  return {
    type: LOGOUT_ADMIN_SUCCESS,
  };
};
