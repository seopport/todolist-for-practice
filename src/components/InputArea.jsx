import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function InputArea({ todo, setTodo }) {

    const box = { width: "500px", height: "200px", border: "1px solid navy" }

    const [title, setTitle] = useState('')
    const [memo, setMemo] = useState('')


    const handleTitleChange = (e) => { setTitle(e.target.value) }
    const handleMemoChange = (e) => { setMemo(e.target.value) }

    const handleAddButtonClick = () => {
        const newTodo = {
            id: nanoid(),
            title,
            memo,
            isDone: false
        }
        setTodo([...todo, newTodo])
    }

    return (
        <>
            <div style={box}>
                할일 타이틀 : <input type='text' value={title} onChange={handleTitleChange} /><br />
                할일 메모 : <input type='text' value={memo} onChange={handleMemoChange} />
                <br /><button onClick={handleAddButtonClick}>추가</button>
            </div>
        </>
    )
}

export default InputArea