import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Playlist from "../Playlist/Playlist";
import Jumbo from "../../components/Jumbo/Jumbo";

class Homepage extends Component {

  componentDidMount() {
    // update authenticated state on logout
    // this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <div className="container2">
        <Jumbo />
      </div>
    )
  }
};

export default Homepage;