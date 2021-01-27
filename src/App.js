import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//PAGES
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
