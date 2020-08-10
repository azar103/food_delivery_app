import React, { useState, useEffect, useRef } from 'react'
import './Login.scss'
import Form from './Form'
import { Link, Redirect } from 'react-router-dom'
import Nav from './Nav'
import { connect } from 'react-redux'
import { login, loginAdmin } from '../reducers/authActions'
import { Alert } from 'reactstrap'
import { clearErros } from '../reducers/errorActions'

 function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg]= useState('')
    const prevError = useRef()
      useEffect(() => {
          const {error} = props
          prevError.current = error
          if(error !== prevError) {
               if(error.id === 'LOGIN_FAIL'){
                   setMsg(error.msg.message)
               }else {
                   setMsg(null)
               }
          }
          
      })

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(email !== 'admin@gmail.com' && password!=="admin"){
            const user = {
                email,
                password
              }
              props.dispatch(login(user))
        }else {
            props.dispatch(loginAdmin())
        }
  
      
    }

 
    return (
      props.auth.redirectToAdmin === true?
      <Redirect to="/admin" />
      :  
      props.auth.redirectTo === false
      ?
         <>
         <Nav>
         <li id="left">
                  <Link to="/"
                  onClick={() => props.dispatch(clearErros())}
                  >FoodDelivery</Link>
        </li>         
         </Nav>
         {
             msg ?
             <Alert color="danger"
             style={{backgroundColor:"#DC143C", opacity:0.8, margin:'auto', maxWidth: '553px',
            padding: '10px', color: 'white'
            }}
             >{msg}</Alert> 
             :
             null
         }
           <Form>
               <img src="../../login.png" alt="login" className="img_login"/>
               <div className="login_container_right">

               <h1>Welcome !</h1>  
               <div className="form-group">
                  <input type="email"  
                         placeholder="Your email..." 
                         className="input"
                         value={email}
                         onChange={(value) => {
                            props.dispatch(clearErros()) 
                            handleChangeEmail(value)}
                        
                        }
                         />
                  <input type="password"  
                         placeholder="Your password..." 
                         className="input"
                         value={password}
                         onChange={(value) => {
                            props.dispatch(clearErros())  
                            handleChangePassword(value)}}
                         />
               </div>
               <div className="buttons-group">
                   <button className="singup-signin-button"
                   onClick={(e) => onSubmit(e)}
                   >
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
         </>   
        :
        <Redirect to="/"/>

         
    )
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
        error: state.errorReducer
    }
}

export default connect(mapStateToProps)(Login)