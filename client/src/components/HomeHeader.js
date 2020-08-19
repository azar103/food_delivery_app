import React, { useState } from "react";
import "./HomeHeader.scss";
import { connect } from "react-redux";
import { getRandomFood } from "../Helpers/functions";
function HomeHeader(props) {
  const food = getRandomFood(props.foods);
  return (
    <div
      className="home_header_container"
      style={{ backgroundImage: `url(${food.url})` }}
    >
      <div className="title_container">food of the day</div>
      <div
        className="card_container_header"
        style={{ width: "300px", height: "280px" }}
      >
        <span id="label">{food.name}</span>

        <span id="price">{food.price} DT</span>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foods,
  };
};
export default connect(mapStateToProps)(HomeHeader);
