import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RemoveFromCart } from '../reducers/cartActions'
import { Redirect } from 'react-router-dom'

 function DeleteOrder(props) {
     useEffect(() => {
         props.dispatch(RemoveFromCart(props.match.params.id))
     }, [])
    return (
        <Redirect to="/orders" />
    )
}
const mapStateToProps =(state) => {
    return {
        items: state.cartReducer
    }
}

export default connect(mapStateToProps)(DeleteOrder)