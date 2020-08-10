

const {  ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, DELETE_USER, DELETE_USER_AND_COMMANDS, FETCH_ITEMS } = require("./actionTypes")

const initialState = {
    items: []
}

const manageCart = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ITEMS:
            return {
                ...state.items,
                items :[...action.payload]
            }
        case ADD_TO_CART:
           return {
               ...state.items,
               items: [...state.items, action.payload]
           }
        case REMOVE_FROM_CART:
          return {
              ...state.items,
              items: state.items.filter(item => item._id !== action.payload)
          }   

       case CLEAR_CART:
           return {
               ...state,
               items: []
           }       
 
                
            
        default:
            return state; 

    }
}

export default manageCart;