import './App.css';
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route exact path="/" children={<Todos />} />
              <Route path="/todos/:id" children={<Todos />} />
          </Switch>

      </Router>
    </div>
  );
}

export default App;
