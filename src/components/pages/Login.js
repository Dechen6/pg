import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap';
import {Navbar, Container, Nav, Table, Pagination, Button} from 'react-bootstrap'
import './style.css';

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div>
    <img className="wave" src="assets/img/wave3.png" />
        <div className="container6">
          <div className="img">
            <img src="assets/img/bg6.svg" />

          </div>
          <div className="login-content">
          <form onSubmit={handleSubmit}>
          <h2 class="title">Welcome</h2>
          <div class="input-div one">
           		   <div class="i">
           		   		<i class="fa fa-envelope"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Email</h5>
                      <input type="text" onChange={e => setUserName(e.target.value)} />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input type="password" onChange={e => setPassword(e.target.value)} />
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" class="btn6" value="Login"/>
      </form>
          </div>
        </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};