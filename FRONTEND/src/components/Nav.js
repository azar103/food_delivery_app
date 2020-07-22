import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.scss'
export default function Nav() {
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
                 <li>
                    <Link to="/orders">Orders</Link>
                 </li>  
                 <li>
                    <Link to="/login">Login</Link>
                 </li>  
              </div>            
          </ul>  
         
        
    )
}
