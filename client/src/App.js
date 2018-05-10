import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Playlist from "./pages/Playlist/Playlist";
import SignUp from "./pages/SignUp/SignUp";
import Home from './pages/Home/Home';
import Wrapper from './components/Wrapper/Wrapper';
import axios from "axios";
import Login from "./pages/Login/Login";
import './App.css';

class App extends Component {
  state = {
    loggedin: false
  }

componentWillMount() {
  this.checkIfLoggedIn();
  console.log(this.state);
}

checkIfLoggedIn = (res) => {
  if (this.state === false){
      res.redirect("/home");
    }

  axios.get('/current_user')
    .then(response => {
      this.setState({loggedin: response.data.logged_in})
    });

}  
  render() {
    return (
      <Router>
      <div className="App">
      <Wrapper>
        <Nav loggedIn={this.state.loggedin}/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/playlist" component={Playlist} loggedIn={this.state.loggedin}/>
        {/* <Route component={NoMatch} /> */}
        </Switch>
      {/* <Footer /> */}
      </Wrapper>
      </div>      
      </Router>
    );
  }
}

export default App;
