import React from 'react'

function Todo({ todo, setTodo }) {

    const handleDoneButtonClick = (id) => {
        //isDone을 true로 변경
        const newTodo = todo.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    isDone: true
                }
            } else return item
        })
        setTodo(newTodo)
    }

    const handleReturnButtonClick = (id) => {
        const newTodo = todo.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    isDone: false
                }
            } else return item
        })
        setTodo(newTodo)
    }

    const handleDeleteButtonClick = (id) => {
        const newTodo = todo.filter((item) => {
            return item.id !== id
        })
        setTodo(newTodo)
    }

    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "200px", border: "1px solid orange" }}>
                추가된 할일
                {
                    todo.filter((item) => {
                        return item.isDone === false && item.id !== 0
                    }).map((item) => {

                        return (
                            <div key={item.id}>
                                {item.title} - {item.memo}
                                <button onClick={() => handleDoneButtonClick(item.id)}>완료</button>
                                <button onClick={() => handleDeleteButtonClick(item.id)}>삭제</button>
                            </div>
                        )

                    })}
            </div>
            <div style={{ width: "200px", border: "1px solid orange" }}>
                완료된 할일
                {todo.filter((item) => {
                    return item.isDone === true
                }).map((item) => {

                    return (
                        <div key={item.id}>
                            {item.title} - {item.memo}
                            <button onClick={() => handleReturnButtonClick(item.id)}>되돌리기</button>
                            <button onClick={() => handleDeleteButtonClick(item.id)}>삭제</button>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Todo