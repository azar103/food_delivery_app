import React, { useState, useEffect, useRef } from "react";
import DashboardModal from "./DashboardModal";
import "./AddFood.scss";
import { connect } from "react-redux";
import swal from "sweetalert";
import { createFood } from "../../reducers/foodActions";
import { Alert } from "reactstrap";
import { clearErros } from "../../reducers/errorActions";
import { isEmpty } from "../../Helpers/functions";
function AddFood(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [msg, setMsg] = useState("");
  const prevError = useRef();
  useEffect(() => {
    const { error } = props;
    prevError.current = error;
    if (error !== prevError) {
      if (error.id === "CREATE_FOOD_FAIL") {
        setMsg(error.msg.message);
      } else {
        setMsg(null);
      }
    }
  });

  const onHandleChangeName = (e) => {
    setName(e.target.value);
  };
  const onHandleChangeCity = (e) => {
    setCity(e.target.value);
  };
  const onHandleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onHandleChangeUrl = (e) => {
    setUrl(e.target.value);
  };
  const onHandleChangeIngredients = (e) => {
    setIngredients(e.target.value.split(","));
  };

  const addFood = (name, city, price, url, ingredients) => {
    props.dispatch(createFood({ name, city, price, url, ingredients }));

    if (isEmpty(msg) === true) {
      swal("Food Added", "", "success");
    } else {
      swal(msg, "", "error");
    }
  };
  return (
    <DashboardModal>
      <div style={{ flexDirection: "column" }}>
        <form
          className="form-group"
          onSubmit={(e) => {
            e.preventDefault();
            addFood(name, city, price, url, ingredients);
            setName("");
            setCity("");
            setPrice("");
            setUrl("");
            setIngredients("");
          }}
        >
          <label>
            <b>Food Name</b>
          </label>
          <input
            type="text"
            placeholder="Name..."
            className="input"
            name="name"
            value={name}
            onChange={(e) => {
              props.dispatch(clearErros());
              onHandleChangeName(e);
            }}
          />
          <label>
            <b>City</b>
          </label>
          <input
            type="text"
            placeholder="city..."
            className="input"
            name="city"
            value={city}
            onChange={(e) => {
              props.dispatch(clearErros());
              onHandleChangeCity(e);
            }}
          />
          <label>
            <b>Price</b>
          </label>
          <input
            type="number"
            placeholder="price..."
            className="input"
            name="price"
            value={price}
            onChange={(e) => {
              props.dispatch(clearErros());
              onHandleChangePrice(e);
            }}
          />
          <label>
            <b>url of image</b>
          </label>
          <input
            type="text"
            placeholder="put your url here..."
            className="input"
            name="url"
            value={url}
            onChange={(e) => {
              props.dispatch(clearErros());
              onHandleChangeUrl(e);
            }}
          />
          <label>
            <b>ingredients</b>
          </label>
          <textarea
            rows="30"
            cols="50"
            placeholder="ingredients..."
            name="ingredients"
            value={ingredients}
            onChange={(e) => {
              props.dispatch(clearErros());
              onHandleChangeIngredients(e);
            }}
          ></textarea>
          <input type="submit" value="create food" className="btn_submit" />
        </form>
      </div>
    </DashboardModal>
  );
}

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foods,
    error: state.errorReducer,
  };
};
export default connect(mapStateToProps)(AddFood);
