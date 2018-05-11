import React from "react";
import {Component} from "react";
import axios from 'axios';
import './style.css'

class Login extends Component {

  render(){
    return (
      <div>

        <button class='btn' onClick={() => {
          true
            ? window.location.replace("https://murmuring-shore-84467.herokuapp.com/login")  // 'http://localhost:8888/login'
            : 'error'
        }
        }
        >Sign in with Spotify</button>


      </div>
    );
  }
}

export default Login;