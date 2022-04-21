import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route exact path="/" children={<Todos />} />
              <Route path="/todos/:id" children={<Todos />} />
          </Routes>
      </Router>
    </div>
  );
}
export default App;
