import React, { Component } from "react";
import "./style.css";

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggle: false};
        this.state = {signup: false};
        this.state = {login: true};
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeModalTarget = this.closeModalTarget.bind(this);
      }
    
      handleClick(e) {
        this.setState({isToggle: !this.state.isToggle});
      }    
   
      closeModal(e) {
          this.setState({isToggle: !this.state.isToggle})
      }

      closeModalTarget(e) {
        if (e.target.className == "modal2") {
            this.setState({isToggle: !this.state.isToggle})
        }
    }

    login(e) {
        this.setState({login: !this.state.login});
        this.setState({signup: !this.state.signup});
    }

    signup(e) {
        this.setState({signup: !this.state.signup});
        this.setState({login: !this.state.login});
    }

    render () {
        return(
<div>
    <li className="nav-item" >
        <a className="nav-link" href="#" id="modalBtn" onClick={this.handleClick} >Login</a>
    </li>
    <div className="login" style = {{display:this.state.isToggle ? 'block': 'none'}}>
        <div className="modal2" id="modalBtn" >
            <div className="modal-content" >
                <span className="closeBtn" id="closeModalBtn" onClick={this.closeModal}>&times;</span>
                <div id="auth-sidebar">
                    <div id="loginForm-sidebar" style = {{display:this.state.login ? 'block': 'none'}}>
                        <h3>Login</h3>
                        <form className="login">
                            <div className="form-group">
                                <label className="form-spacing" for="exampleInputEmail1">Email address</label><br/>
                                <input type="email" className="form-control form-spacing" id="email-input" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label className="form-spacing" for="exampleInputPassword1">Password</label><br/>
                                <input type="password" className="form-control form-spacing" id="password-input" placeholder="Password"/>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-default">Login</button>
                            <br/>
                        </form>
                        <p>or <a href="#" className="switch" onClick={this.signup}>sign up</a></p> 
                        </div>
                        <div id="signupForm-sidebar" style={{display: this.state.signup ? 'block': 'none'}} >
                                <h3>Sign Up</h3>
                                <form className="signup">
                                    <div className="form-group">
                                        <label className="form-spacing" for="exampleInputEmail1">Email address</label><br/>
                                        <input type="email" className="form-control form-spacing" id="email-input1" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-spacing" for="exampleInputPassword1">Password</label><br/>
                                        <input type="password" className="form-control form-spacing" id="password-input1" placeholder="Password"/>
                                    </div>
                                    {/* <div style="display: none" id="alert1" className="alert alert-danger" role="alert">
                                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                        <span className="sr-only">Error:</span>
                                        <span className="msg"></span>
                                    </div> */}
                                    <br/>
                                    <button type="submit" className="btn btn-default">Sign Up</button>
                                </form>
                                <p>or <a href="#" className="switch" onClick={this.login}>log in</a></p>
                            </div>
                    </div>
            </div>  
        </div>        
    </div>
</div>
        );
    }
}

export default Modal;
