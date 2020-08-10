import { GET_USER, FETCH_USERS, CLEAR_ALL_USERS} from "./actionTypes"

const initialState = {
    users: [],
    user: null,

}

const userReducer = (state=initialState, action) => {
   switch(action.type) {
       case FETCH_USERS:
           return {
               ...state,
               users: [...action.payload]
           }
       case GET_USER:
           return {
               ...state,
               user: action.payload
           }   
       
      case CLEAR_ALL_USERS:
          return {
              ...state, 
              users: []
          }   
  
       default:        

          return state;
   }
}

export default userReducer