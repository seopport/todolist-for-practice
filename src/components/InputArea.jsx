import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function InputArea({ todo, setTodo }) {

    const box = {
        width: "400px", height: "200px", border: "1px solid navy",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
    }

    const [title, setTitle] = useState('')
    const [contents, setcontents] = useState('')

    const handleTitleChange = (e) => { setTitle(e.target.value) }
    const handlecontentsChange = (e) => { setcontents(e.target.value) }

    const handleAddButtonClick = () => {
        if (title.trim() === '') {
            alert('할일을 입력하세요.')
            return;
        }
        if (contents.trim() === '') {
            if (!window.confirm('메모를 입력하지 않고 추가하시겠습니까?'))
                return;
        }
        const newTodo = {
            id: nanoid(),
            title,
            contents,
            isDone: false
        }
        setTodo([...todo, newTodo])
        setTitle('');
        setcontents('');
    }

    return (
        <>
            <div style={box}><strong>To Do List</strong><br />
                할일 타이틀<input type='text' value={title} onChange={handleTitleChange} /><br />
                할일 메모<input type='text' value={contents} onChange={handlecontentsChange} />
                <br /><button onClick={handleAddButtonClick}>추가</button>
            </div>
        </>
    )
}

export default InputArea