import React from "react";
import "./css/Header.css";
import "./AddTaskForm";
import AddTaskForm from "./AddTaskForm";
import Button from "./Button";
class Header extends React.Component {
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
      <header>
        <h1>{this.props.title}</h1>
        <menu>
          <Button
            onClick={this.handleButtonShowAddTask}
            className={"menu"}
            text={"+"}
          />
          {this.showAddTaskForm()}
        </menu>
      </header>
    );
  }
}

export default Header;
