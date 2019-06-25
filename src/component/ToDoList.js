import React from "react";
import "./css/ToDoList.css";
import ToDoListRow from "./ToDoListRow";

const ToDoList = props => {
  return (
    <div class="mainColumn">
      <h1>{"Zadania do zrobienia"}</h1>
      <ul>
        {props.list.map((item, index) => {
          return (
            <ToDoListRow
              key={index}
              index={index}
              text={item.text}
              date={item.date}
              onClickRemove={() => props.onClickRemove(index, "toDo")}
              onClickMove={() => props.onClickMove(index)}
              classCSS={item.priotity ? "priority" : "not-priority"}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ToDoList;
