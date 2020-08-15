import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy cheese" },
      { id: 2, content: "trash out" },
    ],
  };
  addTodo = (todo) => {
    todo.id = Math.random() * Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center pink-text">Todo List with React</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
