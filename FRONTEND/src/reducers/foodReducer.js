import {FETCH_FOODS, CREATE_FOOD, DELETE_FOOD, GET_FOOD, CLEAR_ALL_FOOD, EDIT_FOOD} from './actionTypes'
const initialState = {
    foods: [ ],
    food: null
}


const manageFoods = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FOODS:
            return {
                 ...state,
                 foods: [...action.payload]
            }
        case CREATE_FOOD:
            return {
                ...state,
                foods: [...state.foods,           
                    action.payload]
            }    
        case DELETE_FOOD:
            return {
                ...state
            }
        case GET_FOOD:
            return {
                ...state,
                food: action.payload
            }    
  
        case EDIT_FOOD:
            return {
                ...state
            }    
        default:
            return state;    
    }
}


export default manageFoods