import React from "react";
import "./css/Header.css";
import TextInput from "./TextInput";
import CheckInput from "./CheckInput";
import DateInput from "./DateInput";
import Button from "./Button";
import ErrorText from "./ErrorText";
const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <menu>
        <TextInput
          onChange={props.onChange}
          value={props.valueText}
          name={props.textInputName}
          placeholder={"add task"}
        />
        <CheckInput
          text={props.checkInputText}
          onChange={props.onChange}
          CheckedInputName={props.CheckedInputName}
          checked={props.checked}
        />
        <DateInput
          onChange={props.onChange}
          value={props.valueDate}
          DateInputName={props.DateInputName}
          labelText={props.labelText}
        />
        {props.errors.emptyTextInput ? (
          <ErrorText message={"Pole z tekstem nie może być puste"} />
        ) : null}
        {props.errors.emptyDateInput ? (
          <ErrorText message={"pole z data nie może być puste"} />
        ) : null}
        {props.errors.wrongDate ? (
          <ErrorText message={"ta data już była"} />
        ) : null}
        <Button text={props.ButtonText} onClick={props.onClick} />
      </menu>
    </header>
  );
};

export default Header;
