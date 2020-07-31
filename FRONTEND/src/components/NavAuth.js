import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLengthOfCart } from '../Helpers/functions'
import Logout from './Logout'





 function NavAuth(props) {
    const lengthOfCart = getLengthOfCart(props.profile[0], props.cart)


    return (
        <>
             <li id="left">
                  <Link to="/">FoodDelivery</Link>
              </li>    
              <div id="right"> 
                {
                    props.auth &&
                    <li>{`Welcome, ${props.profile[0].firstName}`}</li> 
                } 
        
                 <li>
                    <Link to="/contact">Contact</Link>
                 </li>   
                 <li>
                    <Link to="/about">About Us</Link>
                 </li>   

                 {
                    lengthOfCart > 0
                    ?
                   props.auth &&
                    <li>
                
                    <div className="notification">{lengthOfCart}</div>                 
                    <Link to="/orders"><i className="fa fa-shopping-cart"></i></Link>
                   </li>  
                  :
                  props.auth &&
                  <li>                  
                  <Link to="/orders"><i className="fa fa-shopping-cart"></i></Link>
                 </li>  
                 } 
                {
               props.auth === true ?
                 <Logout /> 
                 :
                 <li>
                    <Link to="/login">Login</Link>
                 </li> 
                } 
              </div>  
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.manageCart.cart,
        auth: state.authReducer.isAuthenticated,
        profile: state.userReducer.user
    }
}

export default connect(mapStateToProps)(NavAuth)