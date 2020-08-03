import React, { useState } from 'react'
import DashboardModal from './DashboardModal'
import './UserSheet.scss'
import { connect } from 'react-redux';
 function UserSheet(props) {

    const getUserById = (id) => {
        const userObject = props.cart.find(user => user.userId === id);
        return userObject;
    }
    
    const id = props.match.params.id; 

    const userObject = getUserById(id)

    return (
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
            </div>
        </DashboardModal>
    )
}

const mapStateToProps = (state) => {
    return {
         cart: state.manageCart.cart
    }
}

export default connect(mapStateToProps)(UserSheet)