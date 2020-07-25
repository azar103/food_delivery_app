import { FETCH_FOODS, ADD_TO_CART, REMOVE_FROM_CART, PRESSED, NOT_PRESSED } from "./actionTypes";

export const getFoods = () => ({
    type: FETCH_FOODS
})

export const AddToCart = (item) => ({
    type: ADD_TO_CART,
    value: item
})

export const RemoveFromCart = (item) => ({
    type: REMOVE_FROM_CART,
    value: item
})

export const pressButton = () => ({
    type: PRESSED
})


export const notPressedButton = () => ({
    type: NOT_PRESSED
})