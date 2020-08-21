import { FETCH_USERS } from "./actionTypes";

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

    default:
      return state;
  }
};

export default userReducer;
