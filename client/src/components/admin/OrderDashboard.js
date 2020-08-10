import React, { useEffect } from 'react'
import moment from 'moment'
import './OrderDashboard.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../../reducers/userActions'
import { findUserById } from '../../Helpers/functions'


 function OrderDashboard(props) {
  
    
    const {userId, date, food } = props.cart
    const currentDate = moment(date).format('DD/MM/YYYY hh:mm')
    const findCartByUserId = (id) => {
         const index = props.users.findIndex((user) => user._id === id)
         return index
    }
 

    const indexSearched = findCartByUserId(userId)
    const userObj = findUserById(props.users, userId)
    return (
     <>
    
            <tr>
            <td>{food.name}</td>
            <td>{userObj.lastName}</td>
            <td>{userObj.firstName}</td>
            <td>{currentDate}</td>
            <td>{parseFloat(food.price).toFixed(3)} DT</td>
    
           
        </tr>

        
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.userReducer.users,
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(OrderDashboard)