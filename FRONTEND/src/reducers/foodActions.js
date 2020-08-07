import axios from 'axios'
import { CREATE_FOOD, DELETE_FOOD, FETCH_FOODS, GET_FOOD, EDIT_FOOD, CREATE_FOOD_FAIL, UPDATE_FOOD_FAIL } from './actionTypes'
import { returnErrors } from './errorActions'

export const getFoods =() => dispatch => {
    axios.get('/api/foods')
         .then((res) => {
             dispatch({
                 type: FETCH_FOODS,
                 payload: res.data
             })
         })
}
export const createFood = (food) => dispatch => {
    axios.post('/api/foods', food)
         .then((res) => {
             dispatch({
                 type: CREATE_FOOD,
                 payload: res.data
             })
         })
         .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status,'CREATE_FOOD_FAIL'));
            dispatch({
                type: CREATE_FOOD_FAIL
            })
        })

    }


export const deleteFood = (food) => dispatch => {
    axios.delete(`/api/foods/${food._id}`)
        .then(() => {
            dispatch({
                type: DELETE_FOOD
            })
        })
}

export const getOneFood = (id) => dispatch => {
    axios.get(`/api/foods/${id}`)
         .then((res) => {
             dispatch({
                 type: GET_FOOD,
                 payload: res.data
             })
         })
         .catch(err => console.log({err}))
}



export const editFood = (id,food) => dispatch => {
    axios.put(`/api/foods/${id}`, food)
         .then(() => {
             dispatch({
                 type: EDIT_FOOD
             })
         })
         .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status,'UPDATE_FOOD_FAIL'));
            dispatch({
                type: UPDATE_FOOD_FAIL
            })
        })
         .catch(err => console.log({err}))
}
