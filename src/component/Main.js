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
        maxLenght={6}
        title="Zadania do zrobienia"
      />
      <TaskList
        list={props.doneList}
        onClickRemove={props.handleButtonRemove}
        director={"done"}
        maxLenght={6}
        title="Zrobione zadania"
      />
    </main>
  );
};
export default Main;
