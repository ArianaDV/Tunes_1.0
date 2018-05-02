import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Jumbo from "./components/Jumbo/Jumbo";
import Footer from "./components/Footer/Footer";
import Playlist from "./pages/Playlist/Playlist";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Jumbo />
        <Switch>
        {/* <Route exact path="/" component={} /> */}
        <Route exact path="/playlist" component={Playlist} />
        {/* <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
      
      <Footer />
      </div>      
      </Router>
    );
  }
}

export default App;
