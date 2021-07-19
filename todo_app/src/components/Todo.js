import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {AiOutlineEdit, AiOutlineCloseSquare} from 'react-icons/ai'

const Todo = ({ todos, completeTodo, deleteTodo, editTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = (value) => {
        editTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm buttonTxt='Update' edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}> 
                {todo.text}
            </div>
            <div className='icons'>
                <AiOutlineCloseSquare  onClick={() => deleteTodo(todo.id)} className='delete-icon'/>
                <AiOutlineEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon'/>
            </div>
        </div>
    ))
}

export default Todo
 