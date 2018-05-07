import React from "react";
import {Component} from "react";
import axios from 'axios';
import './style.css'

class SignUp extends Component {
  signup = (e) => {
    var userData = { email: this.refs.signupemail.value, password: this.refs.signuppassword.value };
      if (!userData.email || !userData.password) {
        // alert('Please enter email and password.')
      return;
    }

    this.refs.signupemail.value = "";
    this.refs.signuppassword.value = "";

    axios
      .post("/api/signup", { email: userData.email, password: userData.password })
      .then(function(response) {
        window.location.replace(response.data.redirect);
      })
      .catch(function(error) {
        console.log("error is" + error);
      });
        
  }

  render(){
    return (
      <div class="form-signup" name="signup" id="signupForm-sidebar">
        <form className="signup">
          <h2 class="form-signup-heading">Sign Up!</h2>
          <div className="form-group">
          <label className="form-spacing" for="exampleInputEmail1">Email address</label><br/>
          <input type="email" className="form-control" ref="signupemail" name="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
          <label className="form-spacing" for="exampleInputPassword1">Password</label><br/>
          <input type="password" className="form-control" ref="signuppassword" name="password" pattern=".{6,10}" title="Password must be between 6 to 10 characters" placeholder="Password" required/>
          </div>
          <button className="btn btn-default" id="signup" onClick={this.signup}>
            Submit
          </button>
          <br/>
        <p>Or log in <a href="/login">here</a></p>
        </form>
      </div>
    );
}
}

export default SignUp;