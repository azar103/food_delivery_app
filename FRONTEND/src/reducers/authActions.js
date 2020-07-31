import { USER_LOADING, USER_LOADED, AUTH_ERROR, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL } from "./actionTypes"

import axios from 'axios'
import { returnErrors } from "./errorActions"


export const registerUser = ({firstName, lastName, email, password, tel, address}) =>(dispatch) => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({firstName, lastName, email, password, tel, address})
    axios.post('http://localhost:4000/api/users', body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        }) 
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status,'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        }
        )
}

export const login = ({ email, password}) =>(dispatch) => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({email, password})
    axios.post('http://localhost:4000/api/users/login', body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }) 
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status,'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        }
        )

}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}