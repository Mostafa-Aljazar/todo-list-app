import React, { useState } from 'react'
import shortid from 'shortid';

function TodoForm(props) {

    const [text, setText] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: shortid.generate(),
            text: text,
            complete: false
        })
        setText("")

    }

    return (
        <div>

            <input type='text'
                placeholder='todo...'
                className='input-field'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button className='btn' onClick={handelSubmit} >Add Todo</button>

        </div>
    )
}

export default TodoForm
