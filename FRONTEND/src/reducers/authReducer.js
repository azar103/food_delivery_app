const {  USER_LOADING, USER_LOADED, LOGIN_SUCCESS, REGISTER_SUCCESS, AUTH_ERROR, LOGIN_FAIL, REGISTER_FAIL, LOGOUT_SUCCESS, CREATE_USER } = require("./actionTypes")

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null,
    redirectTo: false
}


const authReducer = (state=initialState, action) => {
    switch(action.type)  {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state, 
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }   
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
           isLoading: false,
           redirectTo: false
        }
        default:
            return state       
    }
}


export default authReducer