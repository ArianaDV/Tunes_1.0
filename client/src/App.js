import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Anton from "./pages/Anton/Anton";
import Wrapper from './components/Wrapper/Wrapper';
import Home from "./pages/Home";
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Wrapper>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlist" component={Anton} />
      </Switch>
      
      <Footer />
      </Wrapper>
      </div>      
      </Router>
    );
  }
}

export default App;
