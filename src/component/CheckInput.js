import React from "react";

const CheckInput = props => {
  return (
    <div>
      <p>{props.text}</p>
      <input
        type="checkbox"
        onChange={props.onChange}
        checked={props.checked}
        name={props.CheckedInputName}
      >
        {props.checkText}
      </input>
    </div>
  );
};

export default CheckInput;
