import React from 'react'
import TableModal from './TableModal'
import './User.scss'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUserAndCommands } from '../../reducers/userActions'

 function User(props) {
    const {lastName, firstName, address,  tel, _id} = props.user

    
    return (
          <>
             <tr>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td>{address}</td>
            <td>{tel}</td>
            <td>
               <Link to={`/admin/users/${_id}`}>
                <button className="view_customer_remove_btn"
                >delete customer</button>
              </Link>
                </td>
           
        </tr>
   
        </>

    )
}
const mapStateToProps = state => {
    return {
        userProfile: state.userReducer.user
    }
}

export default connect(mapStateToProps)(User)