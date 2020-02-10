import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
const todo = [];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todo,
      todoItem: ""
    };
  }
  handleChanges = e => {
    this.setState({
      todoItem: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.addItem(this.state.todoItem);
  };
  toggleItem = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };
  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div>
        <div>
          <h1>Your Todo List</h1>
        </div>
        <div>
          <TodoForm
            addItem={this.addItem}
            handleChanges={this.handleChanges}
            handleSubmit={this.handleSubmit}
          />
          <TodoList
            todo={this.state.todoList}
            toggleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
