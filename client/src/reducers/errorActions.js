const { GET_ERRORS, CLEAR_ERRORS } = require("./actionTypes");

export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

export const clearErros = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
