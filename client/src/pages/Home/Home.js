import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css'

class Home extends Component {

  componentDidMount() {
    // update authenticated state on logout
    // this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div id='ya'>
      <div className="jumbotron jumbotron-fluid">
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Define your party</h1>
          <p className="lead">
          <Link to={'/playlist'}>Begin here</Link>        </p>
         </main>
      </div>
      </div>
    )
  }
};

export default Home;