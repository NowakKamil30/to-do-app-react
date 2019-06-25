import React from "react";

const CheckInput = props => {
  return (
    <input
      type="checkbox"
      onChange={props.onChange}
      checked={props.checked}
      name={props.CheckedInputName}
    >
      {props.checkText}
    </input>
  );
};

export default CheckInput;
