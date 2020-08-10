import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, FETCH_ITEMS } from "./actionTypes";
import axios from 'axios'

export const fetchItems = () => dispatch => {
    axios.get('/api/items')
          .then((res) => {
              dispatch({
                  type: FETCH_ITEMS,
                  payload: res.data
              })
          })
}
export const AddToCart = (item) => dispatch => {
   axios.post('/api/items', item)
        .then((res) => {
            dispatch({
                type: ADD_TO_CART,
                payload: res.data
            })
        })
}

export const RemoveFromCart = (id) => dispatch => {
    axios.delete(`/api/items/${id}`)
         .then(() => {
             dispatch({
                 type: REMOVE_FROM_CART,
                 payload: id
             })
         })
}
export const clearCart = () => ({
    type: CLEAR_CART
})

