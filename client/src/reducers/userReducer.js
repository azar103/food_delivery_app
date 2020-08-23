import { FETCH_USERS, GET_USER, CLEAR_USER } from "./actionTypes";

const initialState = {
  users: [],
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
