import React, { useState } from 'react'
import './Order.scss'
import { connect } from 'react-redux'
import { RemoveFromCart } from '../reducers/actions'
function Order(props) {
    
    const { name, price} = props.order
    const removeFromCart = () =>{
        props.dispatch(RemoveFromCart(props.order))
    }
    return (
          <>
            <div className="order_block"
            >
            <b>{name}</b>
            <p>{parseFloat(price).toFixed(3)}DT</p>
            <div className="delete_quantity_block">    
               <i className="fa fa-trash"
               onClick={()=> 
                {
                  removeFromCart()
                }
                 
            }
               ></i> 
            </div>   
            </div>
            <hr/>
            </>
          
           
        )
}


const mapStateToProps = (state) => {
   return {
       cart: state.manageCart.cart
   }
}
export default  connect(mapStateToProps)(Order);