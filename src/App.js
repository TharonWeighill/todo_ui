import './App.css';
import FusionAuthLogin from './components/FusionAuthLogin'
import TodoForm from './components/TodoForm';
import FetchTodoLists from "./components/TodoLists";
import Home from "./components/Home";
import { Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";



function App() {
  return (
      <div className='todo-app'>
          <h1>Welcome!</h1>
              <Routes>
                  <Route path="/home" element={Home} />
                  <Route path="/login" element={FusionAuthLogin} />
                  <Route path="/new_todo" element={TodoForm} />
                  <Route path="/todo_lists" element={FetchTodoLists} />
                  <Route path="/error" element={ErrorPage} />

              </Routes>
    </div>
  );
}
export default App;
