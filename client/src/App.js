import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Modal from "./components/Modal/Modal";
import Jumbo from "./components/Jumbo/Jumbo";
import Footer from "./components/Footer/Footer";
import Playlist from "./pages/Playlist/Playlist";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <Modal />
        <Jumbo />
        <Switch>
        {/* <Route exact path="/" component={} /> */}
        <Route exact path="/playlist" component={Playlist} />
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
      
      <Footer />
      </div>      
      </Router>
    );
  }
}

export default App;
