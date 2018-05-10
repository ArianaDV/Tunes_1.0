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
          <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
          <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="nav-brand"><i className="fa fa-headphones"></i></Link>
          <div className="collapse navbar-collapse" id="navbarCollapse1">    
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to="/" className="nav-brand" id="loginBtn" onClick={this.logoutUser}>Log Out</Link>
            </li>
          </ul>
          </div>
          </div>
          </nav>);
        }else {
        return(
          <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
          <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="nav-brand"><i className="fa fa-headphones"></i></Link>
          <div className="collapse navbar-collapse" id="navbarCollapse1">    
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to="/login" className="nav-brand" id="loginBtn">Login</Link>
              {/* <a className="nav-brand" href="/login">Login</a> */}
            </li>
          </ul>
          
          {/* <Link to={"/signup"}>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link" href="/signup" id="modalBtn">Sign Up</a>
            </li>
          </ul>
          </Link> */}
          </div>
          </div>
          </nav>
        );
      }
    }

  }

export default Nav;