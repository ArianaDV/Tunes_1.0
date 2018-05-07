import React from "react";
import {Component} from "react";
import axios from 'axios';
import './style.css'

class Login extends Component {
  login = (e) => {
    var userData = { email: this.refs.loginemail.value, password: this.refs.signinpassword.value };
        if (!userData.email || !userData.password) {
          alert('Please enter email and password.')
          return;
        }

    this.refs.loginemail.value = "";
    this.refs.signinpassword.value = "";

    axios
      .post("/api/login", { email: userData.email, password: userData.password })
      .then(function(response) {
        window.location.replace(response.data.redirect);
        console.log(response)
      })
      .catch(function(error) {
        console.log("error is" + error);
      });
  }

  render(){
    return (
      <div className="form-signin" name="signin" id="signupForm-sidebar">      
        <form className="login">
        <h2 className="form-signin-heading">Login</h2>
        <div className="form-group">
          <label className="form-spacing" for="exampleInputEmail1">Email address</label><br/>
          <input type="email" className="form-control form-spacing" id="email-input1" ref="loginemail" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label className="form-spacing" for="exampleInputPassword1">Password</label><br/>
          <input type="password" className="form-control form-spacing" id="password-input1" ref="signinpassword" name="password" placeholder="Password" required />
        </div>
        <button className="btn btn-default" id="signin" onClick={this.login}>
          Login
        </button>
        <br />
        <p>Or sign up <a href="/signup">here</a></p>
        </form>
      </div>
    );
  }
}

export default Login;