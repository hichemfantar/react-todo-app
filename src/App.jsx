import React, { Component } from "react";
import Todos from "./Todos";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy cheese" },
      { id: 2, content: "trash out" },
    ],
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center pink-text">adazd</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
