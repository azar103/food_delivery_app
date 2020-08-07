import { GET_USER, FETCH_USERS, DELETE_USER, CLEAR_ALL_USERS} from "./actionTypes"
import {Role} from '../Helpers/roles'
const initialState = {
    users: [
       {
           _id: "1",
           lastName: "Zarrouk",
           firsName:"Mouna",
           email:"admin@gmail.com",
           password: "admin",
           tel: 11223344
       }
    ],
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
       case DELETE_USER:
           return {
               ...state,
               cart: action.payload
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