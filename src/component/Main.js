import React from "react";
import "./css/main.css";
import TaskList from "./TaskList";

const Main = props => {
  return (
    <main>
      <TaskList
        list={props.toDoList}
        onClickRemove={props.handleButtonRemove}
        onClickMove={props.handleButtonMove}
        director={"do"}
      />
      <TaskList
        list={props.doneList}
        onClickRemove={props.handleButtonRemove}
      />
    </main>
  );
};
export default Main;
