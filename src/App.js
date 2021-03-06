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
import Logout from "./components/Logout";

const logo = require('./images/gray-orange-logo-with-tagline.png');
const logo2 = require('./images/cleanspeak-horizontal.png')
function App() {
  return (
      <div className='todo-app'>
          <div className='logo1'>
              <a href='https://fusionauth.io/'><img src={logo}/></a>
          </div>
          <div className='logo2'>
              <a href='https://cleanspeak.com/'><img src={logo2}/></a>
          </div>

          <Navbar />
          <h1 className='todo-header'>This is an example app that uses
              <div className='FA-CS'>
              <div className='FA'>
                  <a href='https://fusionauth.io/'>FusionAuth</a>
              </div>
              <div className='and'>
                  and
              </div>
              <div className='CS'>
                  <a href='https://cleanspeak.com/'>CleanSpeak</a>
              </div>
              </div>
          </h1>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new_todo" element={<TodoForm />} />
              <Route path="/todo_lists" element={<FetchTodoLists />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path='/logout' element={<Logout />} />
          </Routes>
    </div>
  )
}
export default App;

