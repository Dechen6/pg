import React, { Component } from 'react'
import {Navbar, Container, Nav, Table, Pagination, Form, FormControl, Button, Row, Col} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Add from './Add';
import ReactPaginate from "react-paginate";
 import { useState } from "react";



function Viewdetails  (){

  const [items, setItems] = useState([])

  const handlePageClick = (data) =>{
    console.log(data.selected);
  }
  return (

    
    <div>
      <Row>
    <Col sm={6} style={{textAlign:'center'}}><h2>Candidate Detail</h2>
    </Col>

  

</Row>
<div className="container">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Age</th>
      



    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Swan</td>
      <td>mark@gmail.com A</td>
      <td>Mail</td>
      <td>27</td>  
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Swan</td>
      <td>mark@gmail.com A</td>
      <td>Mail</td>
      <td>27</td>  
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Swan</td>
      <td>mark@gmail.com A</td>
      <td>Mail</td>
      <td>27</td>   
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

export default Viewdetails;