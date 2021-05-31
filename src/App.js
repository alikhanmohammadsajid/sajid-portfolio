import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as
    Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Header from "./Components/Header";
import Project from "./Components/Project";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import About from './Components/About';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      
        <Switch>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <Project></Project>
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
