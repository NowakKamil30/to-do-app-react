import React from "react";
import Button from "./Button";
const Task = props => {
  return (
    <li className={props.classCSS}>
      <h3>{props.text}</h3>
      <p>
        {props.director + ": "}
        {props.date}
      </p>
      <div>
        {props.director === "do" ? (
          <Button onClick={props.onClickMove}>{"done!"}</Button>
        ) : null}
        <Button onClick={props.onClickRemove}>{"delete"}</Button>
      </div>
    </li>
  );
};

export default Task;
