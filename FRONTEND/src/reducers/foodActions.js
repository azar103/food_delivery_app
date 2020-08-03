import axios from 'axios'
import { CREATE_FOOD, DELETE_FOOD, FETCH_FOODS, GET_FOOD } from './actionTypes'

export const getFoods =() => dispatch => {
    axios.get('http://localhost:4000/api/foods')
         .then((res) => {
             dispatch({
                 type: FETCH_FOODS,
                 payload: res.data
             })
         })
}
export const createFood = (food) => dispatch => {
    axios.post('http://localhost:4000/api/foods', food)
         .then((res) => {
             dispatch({
                 type: CREATE_FOOD,
                 payload: res.data
             })
         })
}


export const deleteFood = (id) => dispatch => {
    axios.delete(`http://localhost:4000/api/foods/${id}`)
        .then(() => {
            dispatch({
                type: DELETE_FOOD,
                payload: id
            })
        })
}

export const getOneFood = (id) => dispatch => {
    axios.get(`http://localhost:4000/api/foods/${id}`)
         .then((res) => {
             dispatch({
                 type: GET_FOOD,
                 payload: res.data
             })
         })
         .catch(err => console.log({err}))

}

