const {  ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } = require("./actionTypes")

const initialState = {
    cart: []
}

const manageCart = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
           const index = state.cart.findIndex(item => {console.log(item.id) 
            return item.id === action.value.id && item.userId === action.value.userId})  
           if(index === -1) {
            return {
                ...state,
                cart: [...state.cart, action.value]
             }
           }else {
               return {
                   ...state
               }
           }   
        case REMOVE_FROM_CART:
            const indexRemoved = state.cart.findIndex(item => item.id === action.value.id) 
             if(indexRemoved !== -1){
                const newState = {
                    ...state,
                    cart : state.cart.filter((item, index) => index !== indexRemoved)
                }
                return newState
             }
       case CLEAR_CART:
           return {
               ...state,
               cart: []
           }       
 
                
            
        default:
            return state; 

    }
}

export default manageCart;