import React from "react";
import "./css/Header.css";
import "./AddTaskForm";
import Menu from "./Menu";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <Menu
        onChange={props.onChange}
        valueText={props.valueText}
        textInputName={props.textInputName}
        checkInputText={props.checkInputText}
        CheckedInputName={props.CheckedInputName}
        checked={props.checked}
        valueDate={props.valueDate}
        DateInputName={props.DateInputName}
        labelText={props.labelText}
        buttonText={props.ButtonText}
        onClick={props.onClick}
        errors={props.errors}
      />
    </header>
  );
};

export default Header;
