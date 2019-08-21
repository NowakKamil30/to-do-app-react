import React from "react";

const Button = props => {
  return (
    <button
      name={props.name}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
