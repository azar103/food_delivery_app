import React, { useState } from 'react'
import { connect } from 'react-redux'
import './Orders.scss'
import Order from './Order'
import swal from 'sweetalert'
import Nav from './Nav'
import { getLengthOfCart, cartFilteredById, totalPrice } from '../Helpers/functions'
import NavAuth from './NavAuth'
import { clearCart } from '../reducers/actions'
import Footer from './Footer'



 function Orders(props) {
   
  const getLength = () => {
    if(props.user === 0) {
        return 0
    }else {
        return getLengthOfCart(props.cart, props.user[0])
    }
}    



   const cartFiltered = cartFilteredById(props.cart, props.user[0]._id)


    return(
        getLength()>0
        ?    
        <>
         <Nav >
          <NavAuth />
         </Nav>    
        <div className="orders_container">
             <h2>{getLength()} command(s)</h2>
             {cartFiltered.map((order, index) => <Order 
               key={index}
                order={order}
             />)        
             }
         
            <p><b>Total Price:</b> {parseFloat(totalPrice(props.cart)).toFixed(3)} DT</p>
         
       
            
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
        
          <button
              onClick={() => props.dispatch(clearCart())}
              >CLEAR ALL</button>
        <Footer />      
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.manageCart.cart,
        auth: state.authReducer.isAuthenticated,
        profile: state.userReducer.users,
        user: state.userReducer.user
    }
}
export default connect(mapStateToProps)(Orders)