import React from 'react';
import { Component } from 'react';
import initiaTodos from '../todo.json';
import { TodoList } from './TodoList';
import { TodoEditor } from './TodoEditor';
import { Filter } from './Filter';
import { Info } from './Info';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    todos: initiaTodos,
    showModal: false,
    filter: '',
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos")
    const parseTodos = JSON.parse(todos)
    this.setState({todos: parseTodos})
    console.log(todos);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos === this.state.todos) {
      return
    }
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
  }

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
                                                                                                                                                                                                                                                                                                                                                                                                  
  toggleComplete = (id)=> {
    this.setState((prevState)=>({
      todos: prevState.todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    }))
  }

  handleShowModal = () => {
    this.setState((prevState)=>({
      showModal: !prevState.showModal
    }))
  }

  render() {
    const todosQuantity = this.state.todos.length;
    const completedTodos = this.state.todos.filter(todo => todo.completed).length;

    return (
      <>
        <button onClick={this.handleShowModal} type="button"></button>
        <Filter />
        <Info 
          quantity={todosQuantity} 
          completed={completedTodos} 
        />
        <TodoList 
          todos={this.state.todos} 
          onDelete={this.deleteTodo} 
          onToggleComplete={this.toggleComplete}
        />
        {this.state.showModal && <Modal><TodoEditor addTodo={this.addTodo} /></Modal>}
      </>
    );
  }
}