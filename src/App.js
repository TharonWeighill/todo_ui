import './App.css';
import './Form.css';
import './navBar.css';
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import TodoForm from './components/TodoForm';
import FetchTodoLists from "./components/TodoLists";
import Navbar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
      <div className='todo-app'>
          <Navbar />
          <h1 className='todo-header'>This is a Todo App that uses<div className='FA'>FusionAuth</div><div>And</div><div className='CS'>CleanSpeak</div></h1>
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/new_todo" element={<TodoForm />} />
                  <Route path="/todo_lists" element={<FetchTodoLists />} />
                  <Route path="*" element={<ErrorPage />} />
              </Routes>
    </div>
  );
}
export default App;
