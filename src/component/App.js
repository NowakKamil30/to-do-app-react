import React from "react";
import "./css/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    toDo: [],
    done: [],
    priotity: false,
    text: "",
    search: "",
    date: this.todayDate(),
    errors: {
      emptyTextInput: false,
      emptyDateInput: false,
      wrongDate: false
    }
  };

  todayDate() {
    const date = new Date().toLocaleDateString();
    const day = date[0] + date[1];
    const month = date[3] + date[4];
    const year = date[6] + date[7] + date[8] + date[9];
    return `${year}-${month}-${day}`;
  }

  render() {
    return (
      <div className="App">
        <Header
          title={"To Do List"}
          onChange={this.handleChange}
          valueText={this.state.text}
          textInputName={"text"}
          CheckedInputName={"priotity"}
          checked={this.state.priotity}
          checkInputText={"priorytet"}
          valueDate={this.state.date}
          DateInputName={"date"}
          labelText={"do kiedy zrobić"}
          ButtonText={"dodaj zadanie"}
          onClick={this.handleButtonAddTask}
          errors={this.state.errors}
          searchInputName={"search"}
          searchValue={this.state.search}
        />
        <Main
          search={this.state.search}
          toDoList={this.state.toDo}
          doneList={this.state.done}
          handleButtonRemove={this.handleButtonRemove}
          handleButtonMove={this.handleButtonMove}
        />
        <Footer />
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
    if (list === "do") {
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
    console.log(name);
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
    if (currentDate.getFullYear() > year) {
      return false;
    }
    if (currentDate.getFullYear() === year && currentDate.getMonth() > month) {
      return false;
    }
    if (
      currentDate.getFullYear() === year &&
      currentDate.getMonth() === month &&
      currentDate.getDate() > day
    ) {
      return false;
    }
    return true;
  }
}

export default App;
