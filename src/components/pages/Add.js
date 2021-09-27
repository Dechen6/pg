import React, { Component } from 'react'
import {Form, Row, Col, Button, Container} from 'react-bootstrap'
export default class About extends Component {
    render() {
        return (
            <div className="container">
                <h2 style={{textAlign:'center'}}>Add Candidates</h2>
                        <div className="container">
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>First Name</Form.Label>
                                <Col sm={10}>
                                <Form.Control type="text" placeholder="First Name" />
                                </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>Last Name</Form.Label>
                                    <Col sm={10}>
                                <Form.Control type="text" placeholder="Last Name" />
                                </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>Email</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>Age</Form.Label>
                                    <Col sm={10}>
                                <Form.Control type="number" placeholder="Age" />
                                </Col>
                                </Form.Group>
                        <fieldset>
                            <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                            Gender
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    />
                                
                                </Col>
                                </Form.Group>
                        </fieldset>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                         
                            <Button variant="success" type="submit">Save</Button>&nbsp;&nbsp;
                            <Button variant="danger">Cancel</Button>
                            
                            </Col>
                        </Form.Group>
        
                        </Form>
                    </div>
            </div>
        )
    }
}
