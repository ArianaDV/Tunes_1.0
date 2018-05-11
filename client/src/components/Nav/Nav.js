import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
        <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link to="/" className="nav-brand"><i className="fa fa-headphones" id="headp"></i></Link>
      <div className="collapse navbar-collapse" id="navbarCollapse1">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">  <Link to="/login" className="nav-brand"><i className="fa fa-sign-in"></i></Link>
        </li>
        </ul>
      </div>
            </div>
    </nav>
    );
  }
}

export default Nav;