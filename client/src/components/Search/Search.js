import React, { Component } from "react";
import API from "../../utils/API";
import axios from 'axios';
import "./style.css";
import Spotify from 'node-spotify-api';

class Search extends Component {

state ={
  text:""
}
  
songSearchAPI = (e) => {
  e.preventDefault();
  const value = e.target.value;
  this.setState({
    text: value
  });
  console.log("song search function ran");
  {console.log(this.state.text)}
}

render(){
  return(
    <form>
      <div className="form-group">
      <input type="search" className="form-control" placeholder="Search for a song" onChange={this.songSearchAPI}/>
      </div>
      <div className="pull-right">
        <button
          onClick={this.songSearchAPI}
          // type="submit"
          className="btn btn-lg btn-danger"
        >
          Submit
        </button>
      </div>
    </form>
  )
  }
}
  
  export default Search;