import './App.css';
import './Form.css';
import './navBar.css';
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import TodoForm from './components/TodoForm';
import FetchTodoLists from "./components/TodoLists";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import React from "react";

const logo = require('./images/gray-orange-logo-with-tagline.png');
const logo2 = require('./images/cleanspeak-horizontal.png')
function App() {
  return (
      <div className='todo-app'>
          <div className='logo1'>
              <img src={logo}/>
          </div>
          <div className='logo2'>
              <img src={logo2}/>
          </div>

          <Navbar />
          <h1 className='todo-header'>This is a Todo App that uses
              <div className='FA'>
                  <a href='https://fusionauth.io/'>FusionAuth</a>
              </div>
              <div>
                  And
              </div>
              <div className='CS'>
                  <a href='https://cleanspeak.com/'>CleanSpeak</a>
              </div>
          </h1>
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/new_todo" element={<TodoForm />} />
              <Route path="/todo_lists" element={<FetchTodoLists />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
    </div>
  )
}
export default App;

