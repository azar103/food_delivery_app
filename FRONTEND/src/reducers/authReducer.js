const { LOGIN_SUCCESS, REGISTER_SUCCESS, AUTH_ERROR, LOGIN_FAIL, REGISTER_FAIL, LOGOUT_SUCCESS, CREATE_USER } = require("./actionTypes")

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    redirectTo: false
}


const authReducer = (state=initialState, action) => {
    switch(action.type)  {
        case REGISTER_SUCCESS: 
        localStorage.setItem('token', action.payload.token)
        return {
            ...state,
            ...action.payload,
        }    
        case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token)
        return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            redirectTo: true
        }    
        case AUTH_ERROR: 
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS: 
        case REGISTER_FAIL: 
        localStorage.removeItem('token')
        return {
           ...state,
           token :null,
           user: null,
           isAuthenticated: false,
           redirectTo: false
        }
        default:
            return state       
    }
}


export default authReducer