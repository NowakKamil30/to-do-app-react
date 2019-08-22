import React from "react";
import "./css/Header.css";
import "./AddTaskForm";

const Header = props => {
  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
    </header>
  );
};

export default Header;
