import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {

    render(){
        return(
        <div className="jumbotron jumbotron-fluid">
            <main role="main" className="inner cover">
              <h1 className="cover-heading">Define your party</h1>
              <Link to={'/playlist'}>
              <button className="nav-button">Begin here</button>
              </Link>
              
        
           </main>

        </div>
        );
    }

}
export default Home;