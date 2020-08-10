import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteUserAndCommands, getUser } from '../../reducers/userActions'
import DashboardModal from './DashboardModal'
import { Button } from 'reactstrap'

 function DeletedUser(props) {
    const [redirectTo, setRedirectTo] = useState(false)
    useEffect(() => {
        props.dispatch(getUser(props.match.params.id))

    })
    const getUserById = (id) => {
        const userObject = props.cart.find(user => user.userId === id);
        return userObject;
    }
    const id = props.match.params.id; 

    const userObject = getUserById(id)
  
    return (
 <>
 {
     redirectTo === false
     ?
     <DashboardModal>
        <div className="sheet">
            <div className="group"> 
            <b className="label-sheet">last Name: </b><span>{userObject.lastName}</span>
            </div>
            <div className="group"> 
            <b className="label-sheet">first Name: </b><span>{userObject.firstName}</span>
            </div>
            <div className="group">
            <b className="label-sheet">city: </b><span>{userObject.city}</span>
            </div>
            <div className="group">
            <b className="label-sheet">telephone: </b><span>{userObject.telephone}</span>
            </div>
            <div className="group">
            <b className="label-sheet">address: </b><span>{userObject.address}</span>
            </div>
            <div className="group">
            <b className="label-sheet">Order: </b><span>{userObject.name}</span>
            </div>
            <button onClick={() => {props.dispatch(deleteUserAndCommands(props.user[0]))
             setRedirectTo(true)
            }}> 
                delete
            </button>
        </div>
    </DashboardModal>
    :
    <Redirect to="/admin/users"/>
 }
        
    </>
    )
}
const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        users: state.userReducer.users,
        cart:state.manageCart.cart
    }
}

export default connect(mapStateToProps)(DeletedUser)