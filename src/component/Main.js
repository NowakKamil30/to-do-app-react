import React from "react";
import "./css/main.css";
import TaskList from "./TaskList";
import filterTasks from "../helperMethods/filterTasks";
const Main = props => {

  return (
    <main>
      <TaskList
        list={filterTasks(props.toDoList, props.search)}
        onClickRemove={props.handleButtonRemove}
        onClickMove={props.handleButtonMove}
        director={"do"}
        maxLenght={6}
        title="Zadania do zrobienia"
      />
      <TaskList
        list={filterTasks(props.doneList, props.search)}
        onClickRemove={props.handleButtonRemove}
        director={"done"}
        maxLenght={6}
        title="Zrobione zadania"
      />
    </main>
  );
};
export default Main;
