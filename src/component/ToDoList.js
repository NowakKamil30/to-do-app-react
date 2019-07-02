import React from "react";
import "./css/ToDoList.css";
import ToDoListRow from "./ToDoListRow";

const ToDoList = props => {
  return (
    <div className="mainColumn">
      <h1>{`Zadania do zrobienia(${props.list.length})`}</h1>
      <ul>
        {props.list
          .sort((a, b) => {
            let i = 0;
            function getDate(date) {
              let data = "";
              while (date[i] !== "-" && i <= date.length - 1) {
                data += date[i];
                i++;
              }
              i++;
              return data;
            }
            const dataA = [
              Number(getDate(a.date)),
              Number(getDate(a.date)),
              Number(getDate(a.date))
            ];
            i = 0;
            const dataB = [
              Number(getDate(b.date)),
              Number(getDate(b.date)),
              Number(getDate(b.date))
            ];
            console.log(dataB);
            if (dataA[0] > dataB[0]) {
              console.log("rok");
              return 1;
            } else if (dataB[0] > dataA[0]) {
              console.log("rok2");
              return -1;
            } else if (dataA[0] === dataB[0]) {
              console.log("rok3");
              if (dataA[1] > dataB[1]) {
                return 1;
              } else if (dataB[1] > dataA[1]) {
                return -1;
              } else if (dataB[1] === dataA[1]) {
                if (dataA[2] > dataB[2]) {
                  return 1;
                } else if (dataB[2] > dataA[2]) {
                  return -1;
                } else if (dataB[2] === dataA[2]) {
                  return 0;
                }
              }
            }
          })
          .slice(0, 5)
          .map((item, index) => {
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
