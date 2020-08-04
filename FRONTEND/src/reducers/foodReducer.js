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
            const indexFood = state.foods.findIndex(item => item._id === action.payload)  
            if(indexFood !==-1){
                return {
                    ...state,
                    foods: state.foods.filter((item, index) => index !== indexFood)
                }
            }  
            break;
        case GET_FOOD:
            return {
                ...state,
                food: action.payload
            }    
        case  CLEAR_ALL_FOOD:
            return {
                ...state,
                foods: []
            }    

        case EDIT_FOOD:
            return {
                ...state,
                food:action.payload
            }    
        default:
            return state;    
    }
}


export default manageFoods