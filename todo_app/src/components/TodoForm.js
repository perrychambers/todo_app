import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputReference = useRef(null)

    useEffect(() => {
        inputReference.current.focus()
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        // parse data from form
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,

        })

        // clear input
        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form   onSubmit={handleSubmit}>
            {props.edit ? (
            <>
            <input      // New todo
                type='text'
                placeholder='Modify a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputReference}
            />
            <button className='todo-button'>Update</button>
            </>
            ) : (
            <>
            <input      // New todo
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputReference}
            />
            <button className='todo-button'>New</button>
            </>
            )}


        </form>
    )
}

export default TodoForm
