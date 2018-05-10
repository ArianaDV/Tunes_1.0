import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {

    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
            <main role="main" className="inner cover">
        <h1 className="cover-heading">Define your party</h1>
        <p className="lead">
        <Link to={'/playlist'}>Begin here</Link>        </p>
      </main>
            </div>
        );
    }

}
export default Home;