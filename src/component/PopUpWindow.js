import React from "react";
import "./css/PopUpWindow.css";
const PopUpWindow = props => {
  return <div className={"popUp"}>{props.children}</div>;
};

export default PopUpWindow;
