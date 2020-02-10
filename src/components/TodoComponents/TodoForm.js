import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        task="name"
        value={props.todoItem}
        onChange={props.handleChanges}
      />
      <button className="add-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
