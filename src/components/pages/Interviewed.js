import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Navbar, Container, Nav, Table, Pagination, Form, FormControl, Button, Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import ReactPaginate from "react-paginate";
 import { useState } from "react";

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

    
    <div>
      <Row>
    <Col sm={6} style={{textAlign:'center'}}><h2>Interviewed Candidate List</h2>
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
<div className="container">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>JLPT</th>
      <th>Hiring Company</th>
      <th>Interview Date</th>
      <th>Result</th>
      



    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mr A</td>
      <td>N2</td>
      <td>Company A</td>
      <td>11/02/2021</td>
      <td>
        <Row>
          <div className="col-md-6">
          Passed first round
          </div>
          <div className="col-md-6">
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
      </Menu>
          </div>
        </Row>
       
     
      </td>

    
    
      
     
    </tr>
    <tr>
    <td>2</td>
      <td>Mrs B</td>
      <td>N3</td>
      <td>Company A</td>
      <td>11/02/2021</td>
      <td>
        <Row>
          <div className="col-md-6">
          Failed
          </div>
          <div className="col-md-6">
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
      </Menu>
          </div>
        </Row>
       
     
      </td>
      
    </tr>
    <tr>
    <td>3</td>
      <td>Miss D</td>
      <td>N2</td>
      <td>Company c</td>
      <td>11/02/2021</td>
      <td>
        <Row>
          <div className="col-md-6">
          Passed first round
          </div>
          <div className="col-md-6">
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
      </Menu>
          </div>
        </Row>
       
     
      </td>
      
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
  );
};
