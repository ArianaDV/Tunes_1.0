import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
  } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import Jumbo from "./components/Jumbo/Jumbo";
import Footer from "./components/Footer/Footer";
import Playlist from "./pages/Playlist/Playlist";
import SignUp from "./pages/SignUp/SignUp";
import Homepage from './pages/Homepage/Homepage';
import axios from "axios";
import Login from "./pages/Login/Login";

class App extends Component {
  state = {
    loggedin: false
  }

componentDidMount() {
  this.checkIfLoggedIn();
}

checkIfLoggedIn = () => {
  axios.get('/current_user')
    .then(response => {
      this.setState({loggedin: response.data.logged_in})
    });
}  
  render() {
    return (
      <Router>
      <div className="App">
        <Nav loggedIn={this.state.loggedin}/>
        <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/homepage" component={Homepage} loggedIn={this.state.loggedin}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/playlist" component={Playlist} loggedIn={this.state.loggedin}/>
        {/* <Route component={NoMatch} /> */}
      
        {/* <PropsRoute exact path="/" component={Homepage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/> */}
            {/* <Route path="/logout" component={LogoutFunction}/> */}
        </Switch>
      <Footer />
      </div>      
      </Router>
    );
  }
}

export default App;
