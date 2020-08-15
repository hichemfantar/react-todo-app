import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <label>Add Todo Item:</label>
          <input
            value={this.state.content}
            type="text"
            name=""
            id=""
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
