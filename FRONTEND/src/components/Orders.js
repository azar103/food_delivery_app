import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Orders.scss'
import Order from './Order'
import swal from 'sweetalert'
import Nav from './Nav'
import { getLengthOfCart, cartFilteredById, totalPrice } from '../Helpers/functions'
import NavAuth from './NavAuth'
import { clearCart } from '../reducers/actions'



 function Orders(props) {
   
    const lengthOfCart = getLengthOfCart(props.auth, props.profile[0], props.cart)
 

  const cartFiltered = cartFilteredById(props.cart, props.user.id)
  console.log("filtered :"+JSON.stringify(cartFiltered))
   
    return(
        lengthOfCart>0
        ?    
        <>
         <Nav >
          <NavAuth />
         </Nav>    
        <div className="orders_container">
             <h2>{lengthOfCart} command(s)</h2>
             {cartFiltered.map((order, index) => <Order 
               key={index}
                order={order}
             />)        
             }
         
            <p><b>Total Price:</b> {parseFloat(totalPrice(props.cart)).toFixed(3)} DT</p>
         
       
             <button className="order_btn"
             onClick={() => {
                 swal('Order Confirmed', `total price :${parseFloat(totalPrice(props.cart).toFixed(3))} DT`, "success")
             }}
             >to Order</button>
             
            {/**
             * <button
              onClick={() => props.dispatch(clearCart())}
              >CLEAR ALL</button>
             */}  
             
            
        </div>
        </>
        :
        <>
        <Nav >
          <NavAuth />
        </Nav>    
        <img src="../../no_commands.jpg" alt="no_image"
        className="img_order"
        />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.manageCart.cart,
        auth: state.authReducer.isAuthenticated,
        user: state.authReducer.user,
        profile: state.userReducer.user
    }
}
export default connect(mapStateToProps)(Orders)