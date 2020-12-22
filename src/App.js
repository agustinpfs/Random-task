import './App.css';
import SelectTime from './SelectTime';
import { BrowserRouter as Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/select'>
        <SelectTime />
      </Route>
    </div>
  );
}

export default App;
