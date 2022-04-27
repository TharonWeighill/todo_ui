import './App.css';
import FusionAuthLogin from './components/FusionAuthLogin'
import TodoForm from './components/TodoForm';
import FetchTodoLists from "./components/TodoLists";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
      <div className='todo-app'>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
          <FusionAuthLogin />
          <FetchTodoLists />
          <TodoForm />
    </div>
  );
}
export default App;
