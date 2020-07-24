import React, { useState } from 'react'
import './Order.scss'
import { connect } from 'react-redux'
import { RemoveFromCart } from '../reducers/actions'
function Order(props) {
    
    const {name, price} = props.order
    console.log(props.cart)
    return (
            <div className="order_block"
            >
            <b>{name}</b>
            <p>{parseFloat(price).toFixed(3)}DT</p>
            <div className="delete_quantity_block">    
               <i className="fa fa-trash"
               onClick={()=> props.dispatch(RemoveFromCart(props.order))}
               ></i> 
            </div>   
            </div>
          
           
        )
}


const mapStateToProps = (state) => {
   return {
       cart: state.manageCart.cart
   }
}
export default  connect(mapStateToProps)(Order);