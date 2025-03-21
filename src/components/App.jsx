import React from 'react';
import { Component } from 'react';
import initiaTodos from '../todo.json';
import { TodoList } from './TodoList';
import { TodoEditor } from './TodoEditor';
import { Filter } from './Filter';
import { Info } from './Info';

export class App extends Component {
  state = {
    todos: initiaTodos,
    filter: '',
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false
    }

    this.setState((prevState)=>({
      todos: [...prevState.todos, newTodo]
    }))
  }

  render() {
    return (
      <>
        <TodoEditor 
         addTodo={this.addTodo}/>
        <Filter />
        <Info />
        <TodoList todos={this.state.todos} onDelete={this.deleteTodo} />
      </>
    );
  }
}
