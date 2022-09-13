import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [ //4k->8k
        "Revise js",
        "Revise DSA",
        "complete assignments",
        "wake up at 6",
      ],
      currTask: "",
    };
  }

    handleAddTask = () => {
        this.setState({
              tasks:[...this.state.tasks,this.state.currTask] //8k
          })
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            currTask: e.target.value
        })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Your Task"
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddTask}>Add</button>
        {this.state.tasks.map((task) => {
          return (
            <li>
              <p>{task}</p>
              <button>Delete</button>
            </li>
          );
        })}
      </div>
    );
  }
}
