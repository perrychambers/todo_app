import React , {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {
    const[todos, setTodos] = useState([])

    const addTodo = (todo) => {
        // input validation w regex
        if(!todo.text || /^\s*$/.test(todo.text))
            return

        const newTodos = [todo, ...todos]   // add to existing Todos

        setTodos(newTodos)
        //console.log(...todos)
    }

    const editTodo = (todoId, newText) => {
        // input validation w regex
        if(!newText.text || /^\s*$/.test(newText.text))
            return

        setTodos(prev => prev.map(item => (item.id === todoId ? newText : item)))
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const deleteTodo =(id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id) 

        setTodos(removeArr)
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} editTodo={editTodo} completeTodos={completeTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}

export default TodoList
