import React from "react";

const TextInput = props => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      className={"input-text"}
    />
  );
};
export default TextInput;
