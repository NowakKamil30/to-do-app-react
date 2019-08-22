import React from "react";

const CheckInput = props => {
  return (
    <div className={"checkbox-container"}>
      <input
        type="checkbox"
        className={"checkbox-container__input"}
        onChange={props.onChange}
        id={props.CheckedInputName}
        checked={props.checked}
        name={props.CheckedInputName}
      >
        {props.checkText}
      </input>
      <label
        className={"checkbox-container__label"}
        htmlFor={props.CheckedInputName}
      >
        {props.text}
      </label>
    </div>
  );
};

export default CheckInput;
