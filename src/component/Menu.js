import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import AddTaskForm from "./AddTaskForm";
import "./css/Menu.css";
class Menu extends Component {
  state = {
    add: false,
    search: false
  };
  handleButtonShowAddTask = () => {
    this.setState(prevState => ({
      add: !prevState.add,
      search: false
    }));
  };
  showAddTaskForm = () => {
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
          errors={this.props.errors}
          buttonText={this.props.buttonText}
        />
      );
    }
    return null;
  };
  render() {
    const addButtonClass = `menu ${this.state.add ? "active" : ""}`;
    return (
      <menu>
        <Button
          onClick={this.handleButtonShowAddTask}
          className={addButtonClass}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        {this.showAddTaskForm()}
      </menu>
    );
  }
}

export default Menu;
