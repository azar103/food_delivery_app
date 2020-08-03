import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./actionTypes";



export const AddToCart = (item) => ({
    type: ADD_TO_CART,
    value: item
})

export const RemoveFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    value: item
})
export const clearCart = () => ({
    type: CLEAR_CART
})

