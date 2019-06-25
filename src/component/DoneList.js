import React from "react";
import DoneListRow from "./DoneListRow";

const DoneList = props => {
  return (
    <>
      <h1>{"Zrobione zadania"}</h1>
      <ul>
        {props.list.map((item, index) => {
          console.log(item.doneDate);
          return (
            <DoneListRow
              key={index}
              index={index}
              text={item.text}
              date={item.date}
              doneDate={item.doneDate}
              onClickRemove={() => props.onClickRemove(index, "done")}
            />
          );
        })}
      </ul>
    </>
  );
};
export default DoneList;
