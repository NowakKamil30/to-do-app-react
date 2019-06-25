import React from "react";

const DateInput = props => {
  return (
    <div className={props.DateInputName}>
      <label>{props.labelText}</label>
      <input
        type="date"
        onChange={props.onChange}
        value={props.value}
        name={props.DateInputName}
      />
    </div>
  );
};

export default DateInput;
