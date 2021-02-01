import './App.scss';
import { Route, Link, Switch, HashRouter } from 'react-router-dom';
//PAGES
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


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
         <Footer />
        </HashRouter>
    </div>
  );
}

export default App;
