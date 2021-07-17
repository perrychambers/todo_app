import React , {useState} from 'react'
import TodoForm from './TodoForm'

const TodoList = () => {
    const[todos, setTodos] = useState([])

    const addTodo = (todo) => {
        // input validation w regex
        if(!todo.text || /^\s*$/.test(todo.text))
            return

        const newTodos = [todo, ...todos]   // add to existing Todos

        setTodos(newTodos)
        console.log(...todos)
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList
