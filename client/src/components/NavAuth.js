import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getLengthOfCart } from '../Helpers/functions'
import Logout from './Logout'





 function NavAuth(props) {
    const getLength = () => {
        if(props.user === null) {
            return 0
        }else {
            return getLengthOfCart(props.items, props.user)
        }
    }    

    return (
        <>
             <li id="left">
                  <Link to="/">FoodDelivery</Link>
              </li>    
              <div id="right"> 
                {
                    props.auth && props.user&& props.profile[0]&&
                    <li>{`Welcome, ${props.profile[0].firstName}`}</li> 
                } 
        
                 <li>
                    <a href="#footer" >Contact</a>
                 </li>   
     

                 {
                    getLength() > 0
                    ?
                   props.auth &&
                    <li>
                
                    <div className="notification">{getLength()}</div>                 
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
        items: state.cartReducer.items,
        auth: state.authReducer.isAuthenticated,
        profile: state.userReducer.user,
        user: state.authReducer.user,
    
    }
}

export default connect(mapStateToProps)(NavAuth)