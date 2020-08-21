import axios from "axios";
import { FETCH_USERS } from "./actionTypes";

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
