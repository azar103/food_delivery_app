import axios from 'axios'
import { CREATE_FOOD, DELETE_FOOD, FETCH_FOODS, GET_FOOD, CLEAR_ALL_FOOD, EDIT_FOOD } from './actionTypes'

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
}


export const deleteFood = (id) => dispatch => {
    axios.delete(`/api/foods/${id}`)
        .then(() => {
            dispatch({
                type: DELETE_FOOD,
                payload: id
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

export const clearAllFoods = () => {
    return {
        type: CLEAR_ALL_FOOD
    }
}

export const editFood = (id,food) => dispatch => {
    axios.put(`/api/foods/${id}`, food)
         .then(res => {
             dispatch({
                 type: EDIT_FOOD,
                 payload: res.data
             })
         })
         .catch(err => console.log({err}))
}
