import React from "react";
import "./css/App.css";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  state = {
    toDo: [],
    done: [],
    priotity: false,
    text: "",
    date: undefined,
    errors: {
      emptyTextInput: false,
      emptyDateInput: false,
      wrongDate: false
    }
  };
  render() {
    return (
      <div className="App">
        <Header
          onChange={this.handleChange}
          valueText={this.state.text}
          textInputName={"text"}
          CheckedInputName={"priotity"}
          checked={this.state.priotity}
          valueDate={this.state.date}
          DateInputName={"date"}
          labelText={"do kiedy zrobić"}
          ButtonText={"dodaj zadanie"}
          onClick={this.handleButtonAddTask}
          errors={this.state.errors}
        />
        <Main
          toDoList={this.state.toDo}
          doneList={this.state.done}
          handleButtonRemove={this.handleButtonRemove}
          handleButtonMove={this.handleButtonMove}
        />
      </div>
    );
  }
  handleButtonMove = index => {
    const { toDo, done } = this.state;
    const item = toDo.splice(index, 1);
    item[0].doneDate = new Date();
    done.push(...item);
    this.setState({
      toDo,
      done
    });
  };

  handleButtonRemove = (index, list) => {
    if (list === "toDo") {
      const { toDo } = this.state;
      toDo.splice(index, 1);
      this.setState({
        toDo
      });
    }
    if (list === "done") {
      const { done } = this.state;
      done.splice(index, 1);
      this.setState({
        done
      });
    }
  };

  handleButtonAddTask = () => {
    const { priotity, text, date, toDo } = this.state;
    console.log(date);
    if (text.length <= 0) {
      this.setState({
        errors: {
          emptyTextInput: true,
          emptyDateInput: false,
          wrongDate: false
        }
      });
    } else if (date === undefined) {
      this.setState({
        errors: {
          emptyTextInput: false,
          emptyDateInput: true,
          wrongDate: false
        }
      });
    } else if (!this.checkDate(date)) {
      this.setState({
        errors: {
          emptyTextInput: false,
          emptyDateInput: false,
          wrongDate: true
        }
      });
    } else {
      toDo.push({
        priotity,
        text,
        date,
        doneDate: undefined
      });
      this.setState({
        toDo,
        errors: {
          emptyTextInput: false,
          emptyDateInput: false,
          wrongDate: false
        }
      });
    }
  };
  handleChange = e => {
    const type = e.target.type;
    const name = e.target.name;
    let value;
    if (type === "text" || type === "date") {
      value = e.target.value;
    } else {
      value = e.target.checked;
    }
    this.setState({
      [name]: value
    });
  };
  checkDate(date) {
    let i = 0;
    function getDate() {
      let data = "";
      while (date[i] !== "-" && i <= date.length - 1) {
        data += date[i];
        i++;
      }
      i++;
      return data;
    }
    const currentDate = new Date();
    const year = Number(getDate());
    const month = Number(getDate()) - 1;
    const day = Number(getDate());
    console.log(currentDate.getMonth(), month);
    if (currentDate.getFullYear() > year) {
      console.log("1");
      return false;
    }
    if (currentDate.getFullYear() === year && currentDate.getMonth() > month) {
      console.log("2");
      return false;
    }
    if (
      currentDate.getFullYear() === year &&
      currentDate.getMonth() === month &&
      currentDate.getDate() > day
    ) {
      console.log("3");
      return false;
    }
    console.log("4");
    return true;
  }
} 

export default App;
