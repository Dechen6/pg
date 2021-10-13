import React, {Component} from "react";
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'
import LongMenu from './threedot'
import { Link } from 'react-router-dom';
import axios from "axios";
class View extends Component{

  constructor(props){
    super(props)
    this.state = {
      items:[],
      isLoaded: false,
    }
  }
 

  async componentDidMount(){
    var accessToken = localStorage.getItem("access")

    const result = axios.create({
      url: 'https://pg-backend-server.herokuapp.com/api/login/',
      headers: {
      Authorization:`Bearer ${accessToken}`
      }
    });
   
  const data = await result.get('https://pg-backend-server.herokuapp.com/api/CandidateData/')

  if (data.status == 200) {
    
    this.setState({
      items:data.data,
      isLoaded:true
    })
  }
  console.log(this.state)
  
  //  fetch('https://pg-backend-server.herokuapp.com/api/CandidateData/?format=json')
  //  .then(res => res.json())
  //  .then(json => {
    //  this.setState({
    //    isLoaded:true,
    //    items:json,
    //  })
  //  }) 
  }

  render(){
    const {isLoaded,items} = this.state
    
    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else{

    return(
      <div style={{paddingLeft:50, paddingRight:50}}>
        <Row>
          <Col sm={6}><h2>Candidate List</h2>
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
       <Table striped bordered hover>
       <thead>
    <tr>
      <th>ID</th>
      <th>Candidate Name</th>
      <th>Gender</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td> {item.id}</td>
              <td> {item.candidate_name}</td>
              <td>{item.gender}</td>
              <td><Link to="/Details">View details</Link></td>
                <td><LongMenu id={item.id}/></td>
              </tr>
          ))} 
    </tbody>
        </Table>
    </div>
    )
    }
  }
}
export default View