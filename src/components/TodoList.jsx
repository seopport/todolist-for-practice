import React from 'react'
import Todo from './Todo'

function TodoList({ todo, setTodo }) {
    const inProgress = {
        width: "250px", minHeight: "100px", backgroundColor: "pink", margin: "10px"
    }

    const done = { width: "250px", minHeight: "100px", backgroundColor: "skyblue", margin: "10px" }

    return (
        <div>
            <div style={inProgress}>
                <Todo todo={todo} setTodo={setTodo} isDone={false} />
            </div>
            <div style={done}>
                <Todo todo={todo} setTodo={setTodo} isDone={true} />
            </div>
        </div>
    )
}

export default TodoList