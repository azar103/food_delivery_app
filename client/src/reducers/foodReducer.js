import {FETCH_FOODS, CREATE_FOOD, DELETE_FOOD, GET_FOOD,  EDIT_FOOD} from './actionTypes'
const initialState = {
    foods: [],
    food: {}
}


const manageFoods = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FOODS:
            return {
                 ...state.foods,
                 foods: [...action.payload]
            }
        case CREATE_FOOD:
            return {
                ...state.foods,
                foods: [...state.foods,           
                    action.payload]
            }    
        case DELETE_FOOD:
            return {
                ...state.foods,
                foods: state.foods.filter(food => food._id !== action.payload)
            }
        case GET_FOOD:
            return {
                ...state.foods,
                food: action.payload
            }    
  
        case EDIT_FOOD:
            return {
                ...state.foods
            }    
        default:
            return state;    
    }
}


export default manageFoods