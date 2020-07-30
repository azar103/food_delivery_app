import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import './Nav.scss'
import { connect } from 'react-redux'

 function Nav(props) {

   
    return (   
          <ul>
              {props.children}
          </ul>  
    )
}
const mapStateToProps = (state) => {
   return {
      cart: state.manageCart.cart
   }
}
export default connect(mapStateToProps)(Nav)