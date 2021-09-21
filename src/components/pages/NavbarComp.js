import React, { Component } from 'react'

import {Navbar, Container, Nav, Table, Pagination} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Add from './Add';
import View from './View';
export default class NavbarComp extends Component {
    render() {
        return (
          <Router>
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><img style={{width:'10%'}} src="assets/img/f.png" />Peace Growba</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">

        <Nav.Link as={Link} to="/Home">Home</Nav.Link>
        <Nav.Link as={Link} to="/Add">Add</Nav.Link>
        <Nav.Link as={Link} to="/View">View</Nav.Link>

      </Nav>
      <Nav>
      <Nav.Link as={Link} to="/home"> <i class="fa fa-bell" aria-hidden="true"></i></Nav.Link> 
        <Nav.Link as={Link} to="/home"> Hi, Kim</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar><br></br>




              </div>
              <div>
              <Switch>
                        
                          <Route path="/Add">
                            <Add/>
                          </Route>
                          <Route path="/View">
                              <View />
                          </Route>
                      </Switch>
              </div>
              </Router>
          )
      }
  }
