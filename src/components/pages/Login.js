import React, { Component } from 'react';

import './style.css';



class Login extends React.Component{
    render(){
        return(
        <div>
            <img className="wave" src="assets/img/wave3.png" />
        <div className="container">
          <div className="img">
            <img src="assets/img/bg6.svg" />

          </div>
          <div className="login-content">
            <form action="index.html">
              <img src="assets/img/logo.png" />
              <h3>Peace Growba</h3>
              <h2 className="title">Welcome</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user" />
                </div>
                <div className="div">
                  <h5>Email</h5>
                  <input type="email" className="input" />
                </div>
              </div>
              <div className="input-div pass">
                <div className="i"> 
                  <i className="fas fa-lock" />
                </div>
                <div className="div">
                  <h5>Password</h5>
                  <input type="password" className="input" />
                </div>
              </div>
             
              <input type="submit" className="btn" defaultValue="Login" />
            </form>
          </div>
        </div>
        
        </div>
        )    
}
}
export default Login;