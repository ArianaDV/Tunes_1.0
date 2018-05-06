import React from "react";
import {Component} from "react";
import axios from 'axios';
import './style.css'

class Login extends Component {
  login = (evt) => {
    let userData = { email: this.refs.signinemail.value, password: this.refs.signinpassword.value };
        if (!userData.email || !userData.password) {
          alert('Please enter both Username and Password to signin.')
          return;
        }

    this.refs.signinemail.value = "";
    this.refs.signinpassword.value = "";

    axios
      .post("/api/login", { email: userData.email, password: userData.password })
      .then(function(response) {
        window.location.replace(response.data.redirect);
        console.log(response)
      })
      .catch(function(error) {
        alert('Wrong Credentials provided. Please check.');
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
          <input type="email" className="form-control form-spacing" id="email-input1" ref="signinemail" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label className="form-spacing" for="exampleInputPassword1">Password</label><br/>
          <input type="password" className="form-control form-spacing" id="password-input1" ref="signinpassword" name="password" placeholder="Password" required />
        </div>
        <button className="btn btn-default" id="signin" onClick={this.login}>
          Login
        </button>
        </form>
      </div>
    );
  }
}

export default Login;