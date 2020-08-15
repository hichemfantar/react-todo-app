import React from "react";
import PropTypes from "prop-types";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <li className="collection-item" key={todo.id}>
          <span>
            {todo.content}
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
              className="waves-effect waves-light btn"
            >
              Delete
            </button>
          </span>
        </li>
      );
    })
  ) : (
    <p className="center">Todos list is empty!</p>
  );
  return <ul className="todos collection">{todoList}</ul>;
};

Todos.propTypes = {};

export default Todos;
