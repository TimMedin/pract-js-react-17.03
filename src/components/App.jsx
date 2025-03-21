import React from "react"
import { Component } from "react"
import initiaTodos from "../todo.json"
import { TodoList } from "./TodoList"

export class App extends Component {
  state = {
    todos: initiaTodos,
    filter: '',
  }

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render(){
    return<>
    onDelete = {this.deleteTodo}
    <TodoList todos={this.state.toodos}/>
    </>
  }
};