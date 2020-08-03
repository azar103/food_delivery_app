import React, { useEffect, useState } from 'react'
import DashboardModal from './DashboardModal'
import TableModal from './TableModal'
import { connect } from 'react-redux'
import User from './User'

import { fetchUsers, clearAllUsers, deleteUserAndCommands } from '../../reducers/userActions'
import { Button } from 'reactstrap'
import { clearCart } from '../../reducers/actions'

 function UsersDashboard(props) {

     useEffect(() => {
         getUsers()
         if(props.users.length === 0){
             props.dispatch(clearCart())
         }
     }, [])


  console.log(props.users.length)   


const getUsers = () => {
    props.dispatch(fetchUsers())
}


console.log(props.users)
  
    const deleteUser = (item) => {
        props.dispatch(deleteUserAndCommands(item))
    }
    return (
        <DashboardModal>
            <TableModal>
             {props.users.length ===  0 ?
              <tr>
              <th>lastName</th>
              <th>firstName</th>
              <th>address</th>
              <th>telephone</th>
              <th>#</th>
          </tr>    
          :
          <>
          <tr>
          <th>lastName</th>
          <th>firstName</th>
          <th>address</th>
          <th>telephone</th>
          <th>#</th>
          </tr>    
       {
       props.users.map((item, index) =>  <User 
          key={index}
          user={item}
          onClick={(item) => deleteUser(item)}
       />)  
      }
      </>
    }   
           
            </TableModal>

        </DashboardModal>
    )
}
const mapStatToProps = (state) => {
    return {
        users: state.userReducer.users,
        cart: state.manageCart.cart
    }
}
export default connect(mapStatToProps)(UsersDashboard)