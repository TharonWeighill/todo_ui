import './App.css';
import './Form.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import FusionAuthLogout from './components/FusionAuthLogout';
import FusionAuthLogin from './components/FusionAuthLogin';
import TodoForm from './components/TodoForm';
import FetchTodoLists from "./components/TodoLists";

function App() {
  return (
      <div className='todo-app'>
          <h1 className='todo-header'>This is a Todo App that uses<div className='FA'>FusionAuth</div>and<div className='CS'>CleanSpeak</div></h1>
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/login" element={<FusionAuthLogin />} />
                  <Route path="/logout" element={<FusionAuthLogout />} />
                  <Route path="/new_todo" element={<TodoForm />} />
                  <Route path="/todo_lists" element={<FetchTodoLists />} />
                  <Route path="*" element={<ErrorPage />} />
              </Routes>
    </div>
  );
}
export default App;
