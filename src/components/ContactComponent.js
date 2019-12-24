import React, {Component} from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }


    handleSubmit(values){
        console.log('Current state is: ' + JSON.stringify(values))
        alert('Current state is: ' + JSON.stringify(values))
    }


    render() {

        return (
            <div className="container">
                 <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            Check Number 91 GB Jagatpur <br />
                            Tehsil & District Faisalabad <br />
                            Punjab, Pakistan <br />
                            <i className="fa fa-phone"></i>: +923 3452 6789 <br />
                            <i className="fa fa-fax"></i>: +923 0987 1123 <br />
                            <i className="fa fa-envelope"></i>: <a href="mailto: zeshanbajwa@spreadout.com">zeshanbajwa@spreadout.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel :+923 3452 6789"><i className="fa fa-phone"></i>Call</a>
                            <a role="button" className="btn btn-info" href="fax :+923 0987 1123"> <i className="fa fa-fax"></i>Fax</a>
                            <a role="button" className="btn btn-success" href="mailto: zeshanbajwa@spreadout.com"><i className="fa fa-envelope"></i>Email</a>
                        </div>
                    </div>
                </div>
                <div className = "row row-content">
                    <div className="col-12">
                        <h3>Send your feedback</h3>
                        <div className="col-12 col-md-9">
                            <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                <Row className="FormGroup">
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstname" id="firstname" name="firstname" 
                                        placeholder="First Name" 
                                        className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="FormGroup">
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastname" id="lastname" name="lastname" 
                                        placeholder="Last Name" 
                                        className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="FormGroup">
                                    <Label htmlFor="telnum" md={2}>Contact Tel. </Label>
                                    <Col md={10}>
                                        <Control.text model=".telnum" id="telnum" name="telnum" 
                                        placeholder="Contact Tel. " 
                                        className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="FormGroup">
                                    <Label htmlFor="email" md={2}>Email Address</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email" 
                                        placeholder="Email" 
                                        className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="FormGroup">
                                    <Col md={{size:6, offset:2}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree" name="agree" className="form-check-input" />
                                                {''} <strong>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{size:3, offset:1}}>
                                        <Control.select model=".contactType" name="contactType" className="form-control">
                                            <option>Tel. </option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="FormGroup">
                                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="FormGroup">
                                    <Col md={{size:10, offset:2}}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
}

export default Contact;