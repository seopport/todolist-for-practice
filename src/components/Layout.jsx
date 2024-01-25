import React from 'react'
import InputArea from './InputArea'
import { useState } from 'react'
import TodoList from './TodoList'

function Layout() {

    const [todo, setTodo] = useState([{
        id: 0,
        title: '',
        memo: '',
        isDone: false
    }])


    return (
        <div>
            <InputArea todo={todo} setTodo={setTodo} />
            <TodoList todo={todo} setTodo={setTodo} />
        </div>
    )
}

export default Layout