const {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  CREATE_USER,
  LOGIN_ADMIN_SUCCESS,
  LOOUT_ADMIN_SUCCESS,
  LOGOUT_ADMIN_SUCCESS,
} = require("./actionTypes");

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  redirectTo: false,
  redirectToAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN_SUCCESS:
      return {
        ...state,
        redirectTo: false,
        redirectToAdmin: true,
      };
    case LOGOUT_ADMIN_SUCCESS:
      return {
        ...state,
        redirectTo: false,
        redirectToAdmin: false,
        redirectToLogin: false,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        redirectTo: true,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        redirectTo: false,
        redirectToLogin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
