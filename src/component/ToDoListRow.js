import React from "react";
import Button from "./Button";
const ToDoListRow = props => {
  return (
    <li className={props.classCSS}>
      <p>{props.text}</p>
      <p>
        {"Wykonać do: "}
        {props.date}
      </p>
      <div>
        <Button onClick={props.onClickMove} text={"Zrobione!"} />
        <Button onClick={props.onClickRemove} text={"Usuń"} />
      </div>
    </li>
  );
};

export default ToDoListRow;
