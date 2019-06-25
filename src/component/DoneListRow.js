import React from "react";
import Button from "./Button";
const DoneListRow = props => {
  const { doneDate, text, date, onClickRemove, classCSS } = props;
  return (
    <li className={classCSS}>
      <p>{text}</p>
      <p>
        {"Wykonać do: "}
        {date}
      </p>
      <p>{`Wykonano: ${
        doneDate.getDate() < 10 ? "0" + doneDate.getDate() : doneDate.getDate()
      }-${
        doneDate.getMonth() + 1 < 10
          ? "0" + (doneDate.getMonth() + 1)
          : doneDate.getMonth() + 1
      }-${doneDate.getFullYear()}`}</p>
      <div>
        <Button onClick={onClickRemove} text={"Usuń"} />
      </div>
    </li>
  );
};

export default DoneListRow;
