import React, {Component} from "react";
import {Table, Button, Form, FormControl, Row, Col} from 'react-bootstrap'

class NameForm extends React.Component {
  render() {
    return (
      <div className="container" style={{width:"60%"}}>
        <h2 style={{textAlign:"center"}}>Add Interviewed Candidate</h2><br></br>
      <Form action="https://pg-backend-server.herokuapp.com/api/CandidateInterviewCreate/?format=json" method="post">
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    cd_id
    </Form.Label>
    <Col sm={9}>
      <Form.Control   type="number" name="cd_id" placeholder="cd_id" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Hiring Company
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="hiring_company" placeholder="Hiring Company" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Interview Date
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="interview_date" placeholder="Interview Date" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Result
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="result" placeholder="Result" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    Reason
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="reason" placeholder="Reason" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
    End Date
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="date" name="end_date" placeholder="End Date" />
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
    Note
    </Form.Label>
    <Col sm={9}>
      <Form.Control  type="text" name="note" placeholder="Note" />
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