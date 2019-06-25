import React from "react";
import "./css/main.css";
import ToDoList from "./ToDoList";
import DoneList from "./DoneList";

const Main = props => {
  return (
    <main>
      <ToDoList
        list={props.toDoList}
        onClickRemove={props.handleButtonRemove}
        onClickMove={props.handleButtonMove}
      />
      <DoneList
        list={props.doneList}
        onClickRemove={props.handleButtonRemove}
      />
    </main>
  );
};
export default Main;
