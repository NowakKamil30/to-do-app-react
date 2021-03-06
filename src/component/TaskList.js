import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  state = {
    text: ""
  };
  static defaultProps = {
    director: "do"
  };
  render() {
    return (
      <div className="main-column">
        <h1 className="main-column__title">{`${this.props.title}(${
          this.props.list.length
        })`}</h1>
        <ul className="task-list">{this.list()}</ul>
      </div>
    );
  }
  list = () => {
    return this.props.list
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
        let dataFirst, dataSecond;
        if (this.props.director === "do") {
          dataFirst = [
            Number(getDate(a.date)),
            Number(getDate(a.date)),
            Number(getDate(a.date))
          ];
          i = 0;
          dataSecond = [
            Number(getDate(b.date)),
            Number(getDate(b.date)),
            Number(getDate(b.date))
          ];
        } else if (this.props.director === "done") {
          dataFirst = [
            Number(getDate(b.date)),
            Number(getDate(b.date)),
            Number(getDate(b.date))
          ];
          i = 0;
          dataSecond = [
            Number(getDate(a.date)),
            Number(getDate(a.date)),
            Number(getDate(a.date))
          ];
        }
        if (dataFirst[0] > dataSecond[0]) {
          return 1;
        } else if (dataSecond[0] > dataFirst[0]) {
          return -1;
        } else if (dataFirst[0] === dataSecond[0]) {
          if (dataFirst[1] > dataSecond[1]) {
            return 1;
          } else if (dataSecond[1] > dataFirst[1]) {
            return -1;
          } else if (dataSecond[1] === dataFirst[1]) {
            if (dataFirst[2] > dataSecond[2]) {
              return 1;
            } else if (dataSecond[2] > dataFirst[2]) {
              return -1;
            } else if (dataSecond[2] === dataFirst[2]) {
              return 0;
            }
          }
        }
      })
      .slice(0, this.props.maxLenght)
      .map((item, index) => {
        return (
          <Task
            key={index}
            director={this.props.director}
            index={index}
            text={item.text}
            date={this.props.director === "do" ? item.date : item.doneDate}
            onClickRemove={() =>
              this.props.onClickRemove(index, this.props.director)
            }
            onClickMove={() => this.props.onClickMove(index)}
            classCSS={item.priotity ? "priority" : "not-priority"}
          />
        );
      });
  };
}
export default TaskList;
