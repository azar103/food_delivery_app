import axios from "axios";
import {
  CREATE_FOOD,
  DELETE_FOOD,
  FETCH_FOODS,
  GET_FOOD,
  EDIT_FOOD,
  CREATE_FOOD_FAIL,
  UPDATE_FOOD_FAIL,
  LOAD_FOODS_SUCCESS,
  LOAD_FOODS_FAILED,
  FOODS_LOADING,
  FOODS_LOADED,
} from "./actionTypes";
import { returnErrors } from "./errorActions";

export const getFoods = () => (dispatch) => {
  dispatch(foodsLoading());
  axios.get("/api/foods").then((res) => {
    dispatch({
      type: FETCH_FOODS,
      payload: res.data,
    });
  });
};
export const createFood = (food) => (dispatch) => {
  axios
    .post("/api/foods", food)
    .then((res) => {
      dispatch({
        type: CREATE_FOOD,
        payload: res.data,
      });
      dispatch({
        type: FOODS_LOADED,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "CREATE_FOOD_FAIL")
      );
      dispatch({
        type: CREATE_FOOD_FAIL,
      });
    });
};

export const deleteFood = (id) => (dispatch) => {
  axios.delete(`/api/foods/${id}`).then(() => {
    dispatch({
      type: DELETE_FOOD,
      payload: id,
    });
  });
};

export const getOneFood = (id) => (dispatch) => {
  axios
    .get(`/api/foods/${id}`)
    .then((res) => {
      dispatch({
        type: GET_FOOD,
        payload: res.data,
      });
    })
    .catch((err) => console.log({ err }));
};

export const editFood = (id, food) => (dispatch) => {
  axios
    .put(`/api/foods/${id}`, food)
    .then(() => {
      dispatch({
        type: EDIT_FOOD,
      });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "UPDATE_FOOD_FAIL")
      );
      dispatch({
        type: UPDATE_FOOD_FAIL,
      });
    })
    .catch((err) => console.log({ err }));
};

export const foodsLoading = () => {
  return {
    type: FOODS_LOADING,
  };
};
