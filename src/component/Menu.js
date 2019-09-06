import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faMoon } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import AddTaskForm from "./AddTaskForm";
import SearchInput from "./SearchInput";

import setCookie from "../helperMethods/setCookie";
import readCookie from "../helperMethods/readCookie";
import changeStyle from "../helperMethods/changeStyle";
import config from "../config.json";

class Menu extends Component {
  state = {
    add: false,
    search: false,
    nightStyle: readCookie("nightStyle") || false
  };
  componentDidMount() {
    console.log(this.state.nightStyle);
    changeStyle(this.state.nightStyle);
  }
  handleButtonShowAddTask = () => {
    this.setState(prevState => ({
      add: !prevState.add,
      search: false
    }));
  };
  handleButtonShowSearchTask = () => {
    this.setState(prevState => ({
      search: !prevState.search,
      add: false
    }));
  };
  handleButtonNightStyle = () => {
    const { nightStyle } = this.state;
    setCookie("nightStyle", !nightStyle, config.maxAge);
    changeStyle(!nightStyle);
    this.setState(prevState => ({
      nightStyle: !prevState.nightStyle
    }));
  };
  showMenuFunction = () => {
    if (this.state.add) {
      return (
        <AddTaskForm
          onChange={this.props.onChange}
          valueText={this.props.valueText}
          textInputName={this.props.textInputName}
          checkInputText={this.props.checkInputText}
          CheckedInputName={this.props.CheckedInputName}
          checked={this.props.checked}
          valueDate={this.props.valueDate}
          DateInputName={this.props.DateInputName}
          labelText={this.props.labelText}
          onClick={this.props.onClick}
          onClickExtraAction={this.handleButtonShowAddTask}
          errors={this.props.errors}
          buttonText={this.props.buttonText}
        />
      );
    } else if (this.state.search) {
      return (
        <SearchInput
          onChange={this.props.onChange}
          value={this.props.searchValue}
          name={this.props.searchInputName}
        />
      );
    }
    return null;
  };
  render() {
    console.log(this.state.nightStyle);
    const addButtonClass = `main-nav__button ${
      this.state.add ? "main-nav__button--active" : ""
    }`;
    const searchButtonClass = `main-nav__button ${
      this.state.search ? "main-nav__button--active" : ""
    }`;
    const nightStyleClass = `main-nav__button ${
      this.state.nightStyle ? "main-nav__button--active" : ""
    }`;
    return (
      <nav className="main-nav">
        <Button
          onClick={this.handleButtonShowAddTask}
          className={addButtonClass}
        >
          <FontAwesomeIcon icon={faPlus} className={"main-nav__icon"} />
        </Button>
        <Button
          onClick={this.handleButtonNightStyle}
          className={nightStyleClass}
        >
          <FontAwesomeIcon icon={faMoon} className={"main-nav__icon"} />
        </Button>
        <Button
          onClick={this.handleButtonShowSearchTask}
          className={searchButtonClass}
        >
          <FontAwesomeIcon icon={faSearch} className={"main-nav__icon"} />
        </Button>
        {this.showMenuFunction()}
      </nav>
    );
  }
}

export default Menu;
