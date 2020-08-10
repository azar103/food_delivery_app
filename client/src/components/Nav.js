import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import './Nav.scss'


 function Nav(props) {

   
    return (   
          <ul>
              {props.children}
          </ul>  
    )
}

export default Nav