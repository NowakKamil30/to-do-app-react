import React from "react";
import "./css/main.css";
import TaskList from "./TaskList";

const Main = props => {
  function filterTasks(list, search) {
    search = search.trim();
    if (typeof search == !"String") {
      return null;
    }
    if (search.lenght === 0) {
      return list;
    }
    const regex = new RegExp(search, "i");
    return list.filter(item => regex.test(item.text));
  }
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
