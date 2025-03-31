
import React from 'react';

export function TodoList({ todos, onDelete, onToggleComplete }) {
  return (
    <ul>
      {todos && todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => onToggleComplete(todo.id)}
              />
            </label>
            <p>{todo.text}</p>
            <button onClick={() => onDelete(todo.id)} type="button"> Видалити </button>
          </li>
        );
      })}
    </ul>
  );
}