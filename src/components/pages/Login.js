import React, { Component } from 'react';
 import { FloatingLabel, Form } from 'react-bootstrap';
import './style.css';
import {useHistory} from "react-router-dom";


function Login(){
  let history = useHistory();

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
            <>
           
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </>
            <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
              <input onClick={() => {history.push('/NavbarComp')}} type="submit" className="btn" defaultValue="Login" />
            </form>
          </div>
        </div>
    </div>
  );
}

export default Login;