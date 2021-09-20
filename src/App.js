import './App.css';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SmoothScrollBar from './components/SmoothScrollBar';

function App() {
  return (
    <>
      <Router>
        <NavMenu/>
        <SmoothScrollBar>
          <Switch>
            <Route path="/about"><About/></Route>
            <Route path="/projects"><Projects/></Route>
            <Route path="/Contact"><Contact/></Route>
            <Route path="/"><Home/></Route>
          </Switch>
          <Footer/>
        </SmoothScrollBar>
      </Router> 
    </>
  );
}

export default App;
