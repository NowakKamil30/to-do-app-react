import React, { Component } from "react";
import Button from "./Button";
import AddTaskForm from "./AddTaskForm";

class Menu extends Component {
  state = {
    add: false
  };
  handleButtonShowAddTask = () => {
    this.setState(prevState => ({
      add: !prevState.add
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
          buttonText={this.props.ButtonText}
          onClick={this.props.onClick}
          errors={this.props.errors}
        />
      );
    }
    return null;
  };
  render() {
    return (
      <menu>
        <Button
          onClick={this.handleButtonShowAddTask}
          className={"menu"}
          text={"+"}
        />
        {this.showAddTaskForm()}
      </menu>
    );
  }
}

export default Menu;
