import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {Navbar, Container, Nav, Table, Pagination, Form, Button,FormControl, Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Details';
import ReactPaginate from "react-paginate";
 import { useState } from "react";
import { width } from 'dom-helpers';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



    const [items, setItems] = useState([])
  
    const handlePageClick = (data) =>{
      console.log(data.selected);
    }
  
  return (
    <Router>
    <div>
      <Row>
    <Col sm={6} style={{textAlign:'center'}}><h2>Candidate List</h2>
    </Col>

    <Col sm={6}>
            <Form className="d-flex" style={{width:300}}>
                <FormControl
                type="search"
                placeholder="Search Candidate"
                className="mr-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
    </Col>

</Row>
<div className="container" >
  
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Last Name</th>
      <th></th>



    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>Mark</td>
      <td>
      <Link as={Link} to="/Details">View Details</Link>
       {/* <a href="Viewdetails">View Details  </a> */}
      <Button variant="link" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>  </td> 
    </tr>
    <tr>
      <td>2</td>
      <td>Alice</td>
      <td>Mark</td>
      <td>
       <a href="Viewdetails">View Details  </a>
      <Button variant="link" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>  </td> 
    </tr>
    <tr>
      <td>3</td>
      <td>Alice</td>
      <td>Mark</td>
      <td>

       <a href="Viewdetails">View Details  </a>
      <Button variant="link" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>  </td> 
    </tr>
  </tbody>
</Table>
      
    </div>
    <ReactPaginate previousLabel={'previous'}
  nextLabel ={'next'}
  breakLabel ={'...'}
  pageCount={10}
  marginPagesDisplayed={4}
  pageRangeDisplayed={1}
  onPageChange={handlePageClick}
  containerClassName={'pagination justify-content-center'}
  pageClassName={'page-item'}
  pageLinkClassName={'page-link'}
  previousClassName={'page-item'}
  previousLinkClassName={'page-link'}
  nextClassName={'page-item'}
  nextLinkClassName={'page-link'}
  breakClassName={'page-item'}
  breakLinkClassName={'page-link'} 
  activeClassName={'active'}

  />
    </div>
    <div>
              <Switch>
                        
                          <Route path="/Details">
                            <Details/>
                          </Route>
                        
                      </Switch>
              </div>
    </Router>
  );
}