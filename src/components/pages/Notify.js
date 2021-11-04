import React, {Component} from "react";
import axios from 'axios'
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'
import './Table.css';
class View extends Component{

  constructor(props){
    super(props)
    this.state = {
      items:[],
      isLoaded: false,
    }
    this.search = this.search.bind(this);
  }
 

  async componentDidMount(){
    var accessToken = localStorage.getItem("access")

    const result = axios.create({
      url: 'https://pg-backend-server.herokuapp.com/api/login/',
      headers: {
      Authorization:`Bearer ${accessToken}`
      }
    });
   
  const data = await result.get('https://pg-backend-server.herokuapp.com/api/Notification/')

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
  async search(event)
{
  event.preventDefault();
  const key = event.target.search.value
  var accessToken = localStorage.getItem("access")

  const result = axios.create({
    url: 'https://pg-backend-server.herokuapp.com/api/login/',
    headers: {
    Authorization:`Bearer ${accessToken}`
    }
  });
 
  const tmpData = await result.get('https://pg-backend-server.herokuapp.com/api/Search/?search='+key)

  if (tmpData.status == 200) {
      
    this.setState({
      items:tmpData.data,
      isLoaded:true
    })
  }
}
  render(){
    const {isLoaded,items} = this.state
    
    if(!isLoaded){
      return <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
             </div>
    }
    else{

    return(
      <div style={{paddingLeft:50, paddingRight:50}}>
        <div style={{textAlign:"center"}}>
          <h2>Notification</h2><h4>Candidate having more than 3 years of work experience</h4>
          <br></br>
      </div>
      
       <Table className="tabledetail" striped bordered hover>
       <thead>
    <tr>
      <th>ID</th>
      <th>Candidate Name</th>
      <th>Gender</th>
      <th>Email</th>
      <th>Profile on sunrise</th>
      <th>DoB</th>
      <th>Country</th>
      <th>Registeration Date</th>
      <th>Job Applied</th>
      <th>Education</th>
      <th>JLPT</th>
      <th>Employment Status</th>
      <th>Employment Date</th>
      <th>Work Experience</th>
      <th>Visa Date</th>
      <th>Remarks</th>
      <th>Resume Link</th>
    </tr>
  </thead>
  <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td> {item.id}</td>
              <td> {item.candidate_name}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.profile_on_sunrise}</td>
              <td>{item.dob}</td>
              <td>{item.country}</td>
              <td>{item.registeration_date}</td>
              <td>{item.job_applied}</td>
              <td>{item.education}</td>
              <td>{item.jlpt}</td>
              <td>{item.employment_status}</td>
              <td>{item.employment_date}</td>
              <td>{item.work_experience}</td>
              <td>{item.visa_date}</td>
              <td>{item.remarks}</td>
              <td>{item.resume_link}</td>
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