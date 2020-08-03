import axios from 'axios'
import { GET_USER, FETCH_USERS, DELETE_USER, DELETE_USER_AND_COMMANDS, CLEAR_ALL_USERS, LOGOUT_SUCCESS } from './actionTypes'

export const getUser = (id) => dispatch => {
    axios.get(`http://localhost:4000/api/users/user/${id}`)
        .then((res) => {
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        })
        .catch(err => console.log({err}))

}

export const fetchUsers =() => dispatch => {
    axios.get('http://localhost:4000/api/users')
         .then((res) => {
             dispatch({
                 type: FETCH_USERS,
                 payload: res.data
             })
         })
         .catch(err => console.log({err}))
}

export const deleteUserAndCommands = user => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
    dispatch({
        type: DELETE_USER_AND_COMMANDS,
        payload: user
    })

    axios.delete(`http://localhost:4000/api/users/${user._id}`)
         .then((res) => {
             dispatch({
                 type: DELETE_USER,
                 payload: res.data
             })
         })
         .catch(err => console.log({err}))
}


export const clearAllUsers = () => {
    return {
        type: CLEAR_ALL_USERS
    }
}