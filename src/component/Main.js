import React from "react";
import "./css/main.css";
import TaskList from "./TaskList";
import filterTasks from "../helperMethods/filterTasks";
import config from "../config.json";
const Main = props => {
  return (
    <main className={"main"}>
      <TaskList
        list={filterTasks(props.toDoList, props.search)}
        onClickRemove={props.handleButtonRemove}
        onClickMove={props.handleButtonMove}
        director={"do"}
        maxLenght={config.maxLenghtTaskList}
        title={"To do"}
      />
      <TaskList
        list={filterTasks(props.doneList, props.search)}
        onClickRemove={props.handleButtonRemove}
        director={"done"}
        maxLenght={config.maxLenghtTaskList}
        title={"Done task"}
      />
    </main>
  );
};
export default Main;
