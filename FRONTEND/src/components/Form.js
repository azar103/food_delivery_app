import React from 'react'
import './Form.scss'
export default function Form(props) {
    return (
        <div className="login_container">
               {props.children}
        </div>
    )
}
