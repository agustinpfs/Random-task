import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StartTask from './components/StartTask';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/start-task" component={StartTask} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
