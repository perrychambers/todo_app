import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoList buttonTxt={'Add todo'}/>
    </div>
  );
}

export default App;
