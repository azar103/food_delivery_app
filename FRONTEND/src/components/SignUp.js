import React from 'react'
import Form from './Form'
import './SignUp.scss'
export default function SignUp() {
    return (
        <Form>
                 <div className="login_container_right">
            <h1>Create Your account</h1>
               <div className="form-group">
                 <input type="text"  placeholder="First Name..." className="input"/>
                  <input type="text"  placeholder="Last Name..." className="input"/>
                  <input type="text"  placeholder="Login..." className="input"/>
                  <input type="password"  placeholder="password..." className="input"/>
                  <input type="number"  placeholder="telephone..." className="input"/>
                  <input type="text"  placeholder="address..." className="input"/>
                  <input type="email"  placeholder="email..." className="input"/>

               </div>
               <div className="buttons-group">
                   <button className="singup-signin-button">
                       <b>Create An Account</b>
                   </button>
               </div>
            </div> 
        </Form>
    )
}
