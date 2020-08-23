import axios from "axios";
import { FETCH_USERS, GET_USER, CLEAR_USER } from "./actionTypes";

export const fetchUsers = () => (dispatch) => {
  axios
    .get("/api/users")
    .then((res) => {
      dispatch({
        type: FETCH_USERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log({ err }));
};

export const getUser = (id) => (dispatch) => {
  axios
    .get(`/api/users/user/${id}`)
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log({ err }));
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
