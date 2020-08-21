import React, { useEffect, useState } from "react";
import "./Home.scss";
import { connect } from "react-redux";

import { getFoods, foodsLoading } from "../reducers/foodActions";
import Food from "./Food";
import { Link, Redirect } from "react-router-dom";
import Nav from "./Nav";
import NavAuth from "./NavAuth";

import Footer from "./Footer";

import Skeleton from "@material-ui/lab/Skeleton";
import HomeHeader from "./HomeHeader";
function Home(props) {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = props;
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);

    if (didMount) {
      setTimeout(() => {
        setIsLoading(true);
      }, 3000);

      loadFoods();
    }

    return () => setDidMount(false);
  }, []);
  const loadFoods = () => {
    dispatch(getFoods());
    setIsLoading(false);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeSelectValue = (e) => {
    setSelectedValue(e.target.value);
  };

  const filteredFoodsByNameAndCity = props.foods.filter(
    (food) =>
      food.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 &&
      food.city.toLowerCase().indexOf(selectedValue.toLowerCase()) !== -1
  );
  const filteredFoodsByName = props.foods.filter(
    (food) => food.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
  );

  return (
    <>
      {props.redirectToAdmin === true ? (
        <Redirect to="/admin" />
      ) : (
        <>
          <Nav>
            <NavAuth />
          </Nav>
          <HomeHeader />

          <section className="home_header">
            <div className="home_header_presentation">
              <h2>
                <span className="title_span">Quick Food</span> delivery
              </h2>
              <p>
                Order your foods at any time and we will deliver them directly
                to your home
              </p>
              {props.auth === true ? (
                <Link to="/orders">
                  <button id="read_btn">Order Now</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button id="read_btn">Your orders</button>
                </Link>
              )}
            </div>
            <img
              className="header_image"
              src="../../img_presentation.jpg"
              alt="header_image"
            />
          </section>
          <section className="about_us">
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              id="img_about_us"
            />
            <div className="about_us_container">
              <h2>
                <span className="title_span_about">About</span> us
              </h2>
              <p>
                Creativity, quality and professionalism are the elements that
                characterize our Catering service. The experience we have gained
                allows us to cook for you anywhere and to create the service you
                want, from the informal event to the reception in an exclusive
                location, from weddings to business meetings, from trade shows
                to private dinners.
              </p>
            </div>
          </section>
          <section className="home_search">
            <h2 id="search_label">Search your Food</h2>
            <div className="search_container">
              <input
                type="text"
                placeholder="search your food by name and city..."
                value={inputValue}
                onChange={(text) => handleChange(text)}
              />
              <select
                onChange={(value) => handleChangeSelectValue(value)}
                value={selectedValue}
                className="custom-select"
                id="select"
              >
                <option value="Select a city" selected>
                  Select a city
                </option>
                <option value="Tunis">Tunis</option>
                <option value="Bizerte">Bizerte</option>
              </select>
              <img
                id="search_image"
                src="../../search_img_section.jpg"
                alt="header_image"
              />
            </div>
          </section>
          <section className="home_foods">
            <h2 id="home_foods_title">Most Recent Foods</h2>
            {isLoading === false ? (
              <div className="foods_container">
                {selectedValue !== "Select a city"
                  ? filteredFoodsByNameAndCity.length > 0 &&
                    filteredFoodsByNameAndCity
                      .slice(0, 6)
                      .map((food, index) => <Food key={index} food={food} />)
                      .reverse()
                  : filteredFoodsByName.length > 0 &&
                    filteredFoodsByName
                      .slice(0, 6)
                      .map((food, index) => <Food key={index} food={food} />)
                      .reverse()}
              </div>
            ) : (
              <div className="skeleton_group">
                <Skeleton variant="text" width={210} />
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="rect" width={210} height={118} />
              </div>
            )}
          </section>

          <Footer />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foods,
    isLoading: state.foodReducer.isLoading,
    items: state.cartReducer.items,
    auth: state.authReducer.isAuthenticated,
    redirectToAdmin: state.authReducer.redirectToAdmin,
    redirectTo: state.authReducer.redirectTo,
    user: state.authReducer.user,
    users: state.userReducer.users,
  };
};

export default connect(mapStateToProps)(Home);
