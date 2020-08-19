import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./SingleFood.scss";

import Nav from "./Nav";

import NavAuth from "./NavAuth";
import { getOneFood, getFoods } from "../reducers/foodActions";
import Footer from "./Footer";
import { AddToCart } from "../reducers/cartActions";
import { findFoodById } from "../Helpers/functions";

function SingleFood(props) {
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    props.dispatch(getFoods());
    setPrice(price * getCount());
  }, []);

  const getCount = () => {
    if (counter < 0) {
      return 0;
    } else {
      return counter;
    }
  };

  const getPrice = (price) => {
    return price * getCount();
  };
  const foodObj = findFoodById(props.foods, props.match.params.id);

  const findFoodByIndex = (items, food) => {
    const index = items.findIndex(
      (item) =>
        item.food.name === food.name && item.userId === props.profile[0]._id
    );
    return index;
  };
  const searchedIndex = findFoodByIndex(props.items, foodObj);
  console.log(searchedIndex);
  return (
    <>
      <Nav>
        <NavAuth />
      </Nav>
      <div className="card_container">
        <img src={foodObj.url} alt="food img" className="single_food_img" />
        <div className="card_body">
          <h3>{foodObj.name}</h3>
          <p>
            <b>price:</b> {parseFloat(getPrice(foodObj.price)).toFixed(3)}DT
          </p>
          <p>
            <b>City:</b> {foodObj.city}
          </p>
          <p>
            <b>Ingredients:</b>
            {foodObj.ingredients.join(",")}
          </p>

          <div className="add-minus-group">
            <button
              className="add-minus"
              onClick={() => setCounter(counter + 1)}
            >
              +
            </button>
            <span>{getCount()}</span>
            <button
              className="add-minus"
              onClick={() => setCounter(counter - 1)}
            >
              -
            </button>
          </div>

          <button
            className="order_btn"
            onClick={() => {
              if (searchedIndex == -1) {
                //constuire un objet de l'item
                const newObj = {
                  food: {
                    foodId: props.match.params.id,
                    name: foodObj.name,
                    price: getPrice(foodObj.price),
                    city: foodObj.city,
                  },
                  userId: props.user.id,
                };

                props.dispatch(AddToCart(newObj));
              }
            }}
          >
            <i
              className="fa fa-shopping-cart fa-2x"
              aria-hidden="true"
              style={{ color: "#FFF" }}
            >
              Add to cart
            </i>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foods,
    food: state.foodReducer.food,
    items: state.cartReducer.items,
    auth: state.authReducer.isAuthenticated,
    user: state.authReducer.user,
    profile: state.userReducer.user,
  };
};
export default connect(mapStateToProps)(SingleFood);
