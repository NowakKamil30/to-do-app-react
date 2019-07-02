import React from "react";

const TextInput = props => {
  return (
    <input
      type="text"
      placeholder={"nazwa zadania"}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
    />
  );
};
export default TextInput;
