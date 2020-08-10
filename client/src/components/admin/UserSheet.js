import React, { useState, useEffect } from 'react'
import DashboardModal from './DashboardModal'
import './UserSheet.scss'
import { connect } from 'react-redux';
import { findUserById } from '../../Helpers/functions';
 function UserSheet(props) {


    const userObj = findUserById(props.users, props.match.params.id)
    console.log(userObj)
   


    return (
        <DashboardModal>
            <div className="sheet">
                <div className="group"> 
                <b className="label-sheet">last Name: </b><span>{userObj.lastName}</span>
                </div>
                <div className="group"> 
                <b className="label-sheet">first Name: </b><span>{userObj.firstName}</span>
                </div>
                <div className="group">
                <b className="label-sheet">address: </b><span>{userObj.address}</span>
                </div>
                <div className="group">
                <b className="label-sheet">telephone: </b><span>{userObj.tel}</span>
                </div>
 
    
            </div>
        </DashboardModal>
    )
}

const mapStateToProps = (state) => {
    return {
         items: state.cartReducer.items,
         users: state.userReducer.users
    }
}

export default connect(mapStateToProps)(UserSheet)