import React, { useEffect } from "react";
import moment from "moment";
import "./OrderDashboard.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../reducers/userActions";
import { findUserById } from "../../Helpers/functions";

function OrderDashboard(props) {
  const { userId, food, date } = props.cart;
  const currentDate = moment(date).format("DD/MM/YYYY hh:mm");
  const findCartByUserId = (id) => {
    const index = props.users.findIndex((user) => user._id === id);
    return index;
  };

  const userObj = findUserById(props.users, userId);

  return (
    <>
      {userObj && (
        <tr>
          <td>{food.name}</td>
          <td>{userObj.lastName}</td>
          <td>{userObj.firstName}</td>
          <td>{currentDate}</td>
          <td>{parseFloat(food.price).toFixed(3)} DT</td>
          <i
            className="fa fa-trash"
            onClick={() => props.onDelete(props.cart._id)}
          ></i>
        </tr>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(OrderDashboard);
