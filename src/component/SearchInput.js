import React from "react";
import TextInput from "./TextInput";
import PopUpWindow from "./PopUpWindow";
const SearchInput = props => {
  return (
    <PopUpWindow>
      <TextInput
        placeholder={"search task"}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
    </PopUpWindow>
  );
};

export default SearchInput;
