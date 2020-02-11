import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          task="name"
          value={this.props.todoItem}
          onChange={this.props.handleChanges}
        />
        <button className="add-button">Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
