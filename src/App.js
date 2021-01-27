import './App.scss';
import { Route, Link } from 'react-router-dom';
//PAGES
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
         
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
       
    </div>
  );
}

export default App;
