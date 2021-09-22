import React, { Component } from 'react'
import {Navbar, Container, Nav, Table, Pagination, Form, FormControl, Button, Row, Col, Link} from 'react-bootstrap'

export default class Viewdetails extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
