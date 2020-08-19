import React from "react";
import "./NavHeader.scss";
import { Link } from "react-router-dom";
export default function NavHeader() {
  return (
    <li id="left">
      <img
        src="https://vegas.momofuku.com/wp-content/themes/momo_lv/img/logo_small.svg"
        alt="fruit"
      />
      <Link to="/" className="labelTitle">
        FoodDelivery
      </Link>
    </li>
  );
}
