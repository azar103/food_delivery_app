import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getLengthOfCart } from "../Helpers/functions";
import Logout from "./Logout";
import { fetchUsers, getUser, clearUser } from "../reducers/userActions";

function NavAuth(props) {
  const getLength = () => {
    if (props.user === null) {
      return 0;
    } else {
      return getLengthOfCart(props.items, props.user);
    }
  };
  useEffect(() => {
    props.dispatch(fetchUsers());
  }, []);
  useEffect(() => {
    if (props.user !== null) {
      props.dispatch(getUser(props.user.id));
    }
  });
  return (
    <>
      <div id="right">
        <li>
          <a href="#footer">Contact</a>
        </li>
        {props.auth && props.user && (
          <li>{`Welcome, ${props.myProfile[0].firstName}`}</li>
        )}
        {getLength() > 0
          ? props.auth && (
              <li>
                <div className="notification">{getLength()}</div>
                <Link to="/orders">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </li>
            )
          : props.auth && (
              <li>
                <Link to="/orders">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </li>
            )}
        {props.auth === true ? (
          <Logout />
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Register</Link>
            </li>
          </>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.items,
    auth: state.authReducer.isAuthenticated,
    user: state.authReducer.user,
    users: state.userReducer.users,
    myProfile: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(NavAuth);
