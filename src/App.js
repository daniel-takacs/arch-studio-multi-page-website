import './App.scss';
import { Route, Link, Switch, HashRouter } from 'react-router-dom';
//PAGES
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
        <HashRouter>
         <Navbar />
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
