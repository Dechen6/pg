import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {NavDropdown, Navbar, Container, Nav, Button} from 'react-bootstrap'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    alert("Are you sure you want to LOGOUT?");
    window.location.href = "./";
  };


        return (
        
            <div>
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
     
        <Navbar.Brand><img style={{width:'10%'}} src="assets/img/f.png" />Peace Growba</Navbar.Brand>
  
    
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      
      <Nav className="me-auto" style={{paddingRight:40}}>
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <NavDropdown title="Candidate" id="basic-nav-dropdown">
        <NavDropdown.Item href="View">View Candidate</NavDropdown.Item>
          <NavDropdown.Item href="Add">Add Candidate</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Interviewed" id="basic-nav-dropdown">
          <NavDropdown.Item href="Interviewed">View Interviewed</NavDropdown.Item>
          <NavDropdown.Item href="Addinterviewed">Add Interviewed</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="/home"> <i class="fa fa-bell" aria-hidden="true"></i></Nav.Link> 
        <Nav.Link> Hi, Kim</Nav.Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-list-4">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width={40} height={40} className="rounded-circle" />
                <Button variant="dark" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> 
              </a>
    
            </li>   
          </ul>
        </div>
        
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar><br></br>
</div>             
          )
      }
  
