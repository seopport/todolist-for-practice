import React from 'react'
import Todo from './Todo'

function TodoList({ todo, setTodo }) {

    return (

        <Todo todo={todo} setTodo={setTodo} />
    )
}

export default TodoList