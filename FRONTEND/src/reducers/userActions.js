import axios from 'axios'
import { GET_USER } from './actionTypes'

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