import React, { useState } from "react";
import { connect } from "react-redux";
import "./Orders.scss";
import Order from "./Order";
import swal from "sweetalert";
import Nav from "./Nav";
import {
  getLengthOfCart,
  cartFilteredById,
  totalPrice,
} from "../Helpers/functions";
import NavAuth from "./NavAuth";
import { RemoveFromCart, clearCart } from "../reducers/cartActions";
import Footer from "./Footer";

function Orders(props) {
  const getLength = () => {
    if (props.user === null) {
      return 0;
    } else {
      return getLengthOfCart(props.items, props.user);
    }
  };

  const cartFiltered = cartFilteredById(props.items, props.user.id);
  const onDelete = (id) => {
    props.dispatch(RemoveFromCart(id));
  };
  console.log(props.items);
  return getLength() > 0 ? (
    <>
      <Nav>
        <NavAuth />
      </Nav>
      <div className="orders_container">
        <h2>{getLength()} command(s)</h2>
        {cartFiltered.map((order, index) => (
          <Order key={index} order={order} onDelete={onDelete} />
        ))}
      </div>

      <Footer />
    </>
  ) : (
    <>
      <Nav>
        <NavAuth />
      </Nav>
      <img
        src="../../no_commands.jpg"
        alt="no_image"
        className="img_order"
        style={{ marginTop: "12px" }}
      />

      {/**
         * <button
              onClick={() => props.dispatch(clearCart())}
              >CLEAR ALL</button>
         * 
         */}
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items,
    auth: state.authReducer.isAuthenticated,
    profile: state.userReducer.users,
    user: state.authReducer.user,
  };
};
export default connect(mapStateToProps)(Orders);
