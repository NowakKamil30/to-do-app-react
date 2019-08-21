import React from "react";
import TextInput from "./TextInput";
import CheckInput from "./CheckInput";
import DateInput from "./DateInput";
import Button from "./Button";
import ErrorText from "./ErrorText";
import PopUpWindow from "./PopUpWindow";
const AddTaskForm = props => {
  const onClick = () => {
    props.onClick();
    props.onClickExtraAction();
  };
  return (
    <PopUpWindow>
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
      <Button onClick={onClick}>{props.buttonText}</Button>
    </PopUpWindow>
  );
};

export default AddTaskForm;
