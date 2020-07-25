import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Orders.scss'
import Order from './Order'
import swal from 'sweetalert'
 function Orders(props) {
    
    const totalPrice = () => {
        let sum =  props.cart.reduce((accumulator, el) => accumulator+el.price,0)
        return sum;  
    }
    
    return(
        props.cart.length>0
        ?    
        <div className="orders_container">
             <h2>{props.cart.length} command(s)</h2>
             {props.cart.map((order, index) => <Order 
               key={index}
                order={order}
             />)
             
             }
         
                  <p><b>Total Price:</b> {parseFloat(totalPrice()).toFixed(3)} DT</p>
         
       
             <button className="order_btn"
             onClick={() => {
                 swal('Order Confirmed', `total price :${parseFloat(totalPrice()).toFixed(3)} DT`, "success")
             }}
             >to Order</button>
        </div>
        :
        <img src="../../no_commands.jpg" alt="no_image"
        className="img_order"
        />
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.manageCart.cart
    }
}
export default connect(mapStateToProps)(Orders)