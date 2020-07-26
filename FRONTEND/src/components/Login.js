import React from 'react'
import './Login.scss'
import Form from './Form'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
           <Form>
               <img src="../../login.png" alt="login" className="img_login"/>
               <div className="login_container_right">

               <h1>Welcome !</h1>  
               <div className="form-group">
                  <input type="text"  placeholder="Your login..." className="input"/>
                  <input type="password"  placeholder="Your password..." className="input"/>
               </div>
               <div className="buttons-group">
                   <button className="singup-signin-button">
                       <b>Sign In</b>
                   </button>

               </div>
               <Link 
               to="/signup"
               style={{color: '#5F9FF7', fontSize: '11px', textDecoration: 'underline'
            }}>
                      Create an account if you are not a member
                </Link>
               </div>
        
              
          </Form>    
         
    )
}
