import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import iOS from "./components/iOS"
import Web from "./components/Web"
import Design from "./components/Design"
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/ios" component={iOS} />
          <Route path="/web" component={Web} />
          <Route path="/design" component={Design} />
          <Route path="/contact" component={Contact} />
        </Switch>
    </Router>
  )
}

export default App;
