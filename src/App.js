import './App.css';
import TodoForm from './components/TodoForm';
import Todo from "./components/Todo";
import FetchTodoLists from "./components/TodoLists";


function App() {
  return (
      <div className='todo-app'>
          <FetchTodoLists />
          <TodoForm />
    </div>
  );
}
export default App;
