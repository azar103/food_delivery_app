import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import './Nav.scss'
import { connect } from 'react-redux'

 function Nav(props) {

   
    return (   
          <ul>
              <li id="left">
                  <Link to="/">FoodDelivery</Link>
              </li>    
              <div id="right">  
                 <li>
                    <Link to="/contact">Contact</Link>
                 </li>   
                 <li>
                    <Link to="/about">About Us</Link>
                 </li>   
                 {
                    props.cart.length > 0
                    ?
                    <li>
                
                    <div className="notification">{props.cart.length}</div>                 
                    <Link to="/orders"><i className="fa fa-shopping-cart"></i></Link>
                   </li>  
                  :
                  <li>                  
                  <Link to="/orders"><i className="fa fa-shopping-cart"></i></Link>
                 </li>  
                 } 
                
                 <li>
                    <Link to="/login">Login</Link>
                 </li>  
              </div>            
          </ul>  
         
        
    )
}
const mapStateToProps = (state) => {
   return {
      cart: state.manageCart.cart
   }
}
export default connect(mapStateToProps)(Nav)