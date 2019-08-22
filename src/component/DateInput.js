import React from "react";

const DateInput = props => {
  return (
    <div className={"container-date"}>
      <label className={"container-date__label"}>{props.labelText}</label>
      <input
        className={"container-date__input"}
        type="date"
        onChange={props.onChange}
        value={props.value}
        name={props.DateInputName}
      />
    </div>
  );
};

export default DateInput;
