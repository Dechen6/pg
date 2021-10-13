import React, {Component} from "react";
import axios from 'axios'
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'

class NameForm extends React.Component {
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
   
  const data = await result.post('https://pg-backend-server.herokuapp.com/api/CandidateDataCreate/')

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

  render() {
    return (
      <div className="container" style={{width:"60%"}}>
        <h2 style={{textAlign:"center"}}>Add Candidate</h2><br></br>
      
      <Form action="https://pg-backend-server.herokuapp.com/api/CandidateDataCreate/?format=json" method="post">
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      Name
    </Form.Label>
    <Col sm={9}>
      <Form.Control   type="text" name="candidate_name" placeholder="Name" />
    </Col>
  </Form.Group>

  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={3}>
        Gender
      </Form.Label>
      <Col sm={9}>
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      Email
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="email" name="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Profile on sunrise
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="profile_on_sunrise" placeholder="Profile on sunrise" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    DOB
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="dob" placeholder="DOB" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Country
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="country" placeholder="Country" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Registeration date
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="registeration_date" placeholder="Registeration date" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Job applied
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="job_applied" placeholder="job applied" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Education
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="education" placeholder="Education" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    JLIP
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="jlpt" placeholder="JLPT" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Work Experience
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="number" name="work_experience" placeholder="Work Experience" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Employment Date
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="employment_date" placeholder="Employment Date" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Visa Date
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="visa_date" placeholder="Visa Date" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Remark
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="remark" placeholder="Remark" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Resume link
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="resume_link" placeholder="Resume_link" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Employment Status
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="number" name="employment_status" placeholder="Employment Status" />
    </Col>
  </Form.Group>

  
  

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 3 }}>
      <Button variant="success" type="submit" value="Submit" >Save</Button>&nbsp;&nbsp;
      <Button variant="danger" type="cancel" value="cancel" >Cancel</Button>
    </Col>
  </Form.Group>
  
</Form>
</div>
    );
  }
}
export default NameForm