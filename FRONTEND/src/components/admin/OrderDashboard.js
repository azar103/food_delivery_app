import React from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import './OrderDashboard.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
 function OrderDashboard(props) {
    const {userId,name, lastName, firstName, date, price} = props.cart
    const currentDate = moment(date).format('DD/MM/YYYY hh:mm')
    const findCartByUserId = (id) => {
         const index = props.users.findIndex((user) => user._id === id)
         return index
    }

    const indexSearched = findCartByUserId(userId)
    console.log(indexSearched)
    console.log(userId)
    return (
     <>
       {
            indexSearched === -1
            ?
            null
            :
            <tr>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td>{currentDate}</td>
            <td>{parseFloat(price).toFixed(3)} DT</td>
            <Link to={`/admin/user/${userId}`}>
            <td>
        
                  <button className="view_customer_btn">
                  view customer
              
                      </button>
            
            </td>
        
                      </Link> 
           
        </tr>
       }
        
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.userReducer.users
    }
}

export default connect(mapStateToProps)(OrderDashboard)