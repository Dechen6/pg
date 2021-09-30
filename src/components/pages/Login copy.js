
import React, { Fragment, FakeText } from "react";
 import { FloatingLabel, Form } from 'react-bootstrap';
 import {Navbar, Container, Nav, Table, Pagination, Button} from 'react-bootstrap'
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Add from './Add';
export default function Login() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


        return (
    <Router>
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
              <input  type="submit" className="btn" defaultValue="Login" />
              <Nav.Link as={Link} to="/Add">Interviewed</Nav.Link>
            </form>
          </div>
        </div>
    </div>
    <div>
              <Switch>
                        
                          <Route path="/Add">
                            <Add/>
                          </Route>
                        
                      </Switch>
              </div>
    </Router>
  );
}