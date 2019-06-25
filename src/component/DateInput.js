import React from "react";

const DateInput = props => {
  return (
    <div>
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
