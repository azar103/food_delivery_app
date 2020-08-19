import React, { useState, useEffect } from "react";

import "./Nav.scss";
import NavHeader from "./NavHeader";

function Nav(props) {
  return (
    <ul>
      <NavHeader />
      {props.children}
    </ul>
  );
}

export default Nav;
