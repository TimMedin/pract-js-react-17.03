import React from "react"

export function TodoList(todos) {
    return <ul>
        {todos.map((todo)=>{
            return <li>
            <label>
                <input type="checkbox"  />
            </label>
            <p>{todo.text}</p>
            <button onClick={onDelete(todo.id)} type="button"></button>
        </li>})}
    </ul>
    return

}