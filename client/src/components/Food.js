import React from "react";
import "./Food.scss";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Food(props) {
  const { price, url, name, _id } = props.food;

  return (
    <>
      {props.auth === true ? (
        <div className="card">
          <img src={url} alt="Avatar" className="img_food" />
          <div className="container">
            <h4>
              <b>{name}</b>
            </h4>
            <span>{price}DT</span>

            <button className="order_btn">
              <Link to={`/foods/${_id}`}>order </Link>
            </button>
          </div>
        </div>
      ) : (
        <Link to="/login">
          <div className="card">
            <img src={url} alt="Avatar" className="img_food" />
            <div className="container">
              <h4>
                <b>{name}</b>
              </h4>
              <span>{price} DT </span>
              <button className="order_btn">
                <Link to="/login">order </Link>
              </button>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer.isAuthenticated,
  };
};
export default connect(mapStateToProps)(Food);
