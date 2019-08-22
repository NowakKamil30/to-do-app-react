import React from "react";
import Button from "./Button";
const Task = props => {
  return (
    <li className={"task-list__" + props.classCSS}>
      <h3 className={"task-list__title"}>{props.text}</h3>
      <p className={"task-list__text"}>
        {props.director + ": "}
        {props.date}
      </p>
      <div className={"task-list__button-container"}>
        {props.director === "do" ? (
          <Button className={"task-list__button"} onClick={props.onClickMove}>
            {"done!"}
          </Button>
        ) : null}
        <Button className={"task-list__button"} onClick={props.onClickRemove}>
          {"delete"}
        </Button>
      </div>
    </li>
  );
};

export default Task;
