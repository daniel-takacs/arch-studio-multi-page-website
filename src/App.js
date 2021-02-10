import './App.scss';
import { Route, Link, Switch, HashRouter } from 'react-router-dom';
//PAGES
import Home from './pages/Home/Home';
import Hero02 from './pages/Home/Hero02';
import Hero03 from './pages/Home/Hero03';
import Hero04 from './pages/Home/Hero04';
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
          <Route path="/Hero02" component={Hero02} />
          <Route path="/Hero03" component={Hero03} />
          <Route path="/Hero04" component={Hero04} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
         <Footer className="footer"/>
        </HashRouter>
    </div>
  );
}

export default App;
