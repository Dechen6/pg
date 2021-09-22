import React, { Component } from 'react'
import {Navbar, Container, Nav, Table, Pagination, Form, FormControl, Button, Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import ReactPaginate from "react-paginate";
 import { useState } from "react";

import Viewdetails from './Viewdetails';


function View  (){

  const [items, setItems] = useState([])

  const handlePageClick = (data) =>{
    console.log(data.selected);
  }
  return (

    
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
<div className="container">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Thinley</td>
      <td>Jamtsho</td>
    
      <Nav.Link as={Link} to="/Viewdetails">View details</Nav.Link>
      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      
     
    </tr>
    <tr>
      <td>2</td>
      <td>Karma </td>
      <td>Tshewang</td>
      <Nav.Link href="#">View Details</Nav.Link>
      
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>Larry the Bird</td>
      <Nav.Link href="#">View Details</Nav.Link>
      
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

export default View;