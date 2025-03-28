import React from 'react';
import { Component } from 'react';
import initiaTodos from '../todo.json';
import { TodoList } from './TodoList';
import { TodoEditor } from './TodoEditor';
import { Filter } from './Filter';
import { Info } from './Info';

export class App extends Component {
  state = {
    todos: [
      { "id": "id-1", "text": "Вивчити основи React", "completed": true },
      { "id": "id-2", "text": "Розібратися з React Router", "completed": false },
      { "id": "id-3", "text": "Пережити Redux", "completed": false }
    ],
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
                                                                                                                                                                                                                                                                                                                                                                                                  
  toggleComplete = (id)=> {
    this.setState((prevState)=>({
      todos: prevState.todos.map[(todo)=>{
        todo.id == id ?  {...todo, completed: !todo.completed} : todo
      }]
    }))
  }

  render() {
    
    const todosQuantity = this.state.todos.length;
    // const completeTodos 

    return (
      <>
        <TodoEditor 
         addTodo={this.addTodo}/>
        <Filter />
        <Info quantity={todosQuantity} />
        <TodoList todos={this.state.todos} onDelete={this.deleteTodo} />
      </>
    );
  }
}
