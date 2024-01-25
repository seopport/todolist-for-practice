import React from 'react'

function Todo({ todo, setTodo, isDone }) {

    const handleDoneButtonClick = (id) => {
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
        <>
            {todo.filter((item) => {
                return item.id !== 0 && isDone === item.isDone
            }).map((item) => {
                return (

                    <div style={{ width: "250px", border: "1px solid white" }}>
                        {isDone === false ? "진행중" : "완료됨"}
                        <div key={item.id}>
                            {item.title} - {item.memo}
                            {!item.isDone
                                ? <><button onClick={() => handleDoneButtonClick(item.id)}>완료</button>
                                    <button onClick={() => handleDeleteButtonClick(item.id)}>삭제</button></>
                                :
                                <>
                                    <button onClick={() => handleReturnButtonClick(item.id)}>되돌리기</button>
                                    <button onClick={() => handleDeleteButtonClick(item.id)}>삭제</button></>
                            }
                        </div>
                    </div>

                )
            })

            }
        </>
    )
}

export default Todo