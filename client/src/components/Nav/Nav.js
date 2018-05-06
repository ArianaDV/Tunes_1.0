import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from 'axios';

class Nav extends Component {
  constructor(props){
    super(props);
  }

    logoutUser = () => {
      axios.get('/logout')
      .then(response => {
        window.location.replace(response.data.redirect);
      })
    }

    render() {
      if (this.props.loggedIn) {
        return ( 
        <div className="Nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="nav-brand">Party Tunes</Link>
          <form className="form-inline">
            <span className="nav-item" >
              <a className="nav-link" href="/login" id="modalBtn" onClick={this.logoutUser}>Logout</a>
            </span>
          </form>
        </nav>
        </div>);
        }else {
        return(
          <div className="Nav">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="nav-brand">Party Tunes</Link>
          <form className="form-inline">    
          <Link to={"/login"} id="loginBtn">
            <span className="nav-item" >
              <a className="nav-link" href="/login" id="modalBtn">Login</a>
            </span>
          </Link>
          <Link to={"/signup"}>
            <span className="nav-item signUp" id="signupBtn">
              <a className="nav-link" href="/signup" id="modalBtn">Sign Up</a>
            </span>
          </Link>
          </form>
          </nav>
          </div>
        );
      }
    }
  }

export default Nav;