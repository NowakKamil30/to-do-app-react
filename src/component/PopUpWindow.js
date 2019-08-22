import React from "react";
import "./css/PopUpWindow.css";
const PopUpWindow = props => {
  return <div className={"main-nav__pop-up"}>{props.children}</div>;
};

export default PopUpWindow;
