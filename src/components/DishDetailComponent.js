import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem,Modal, ModalBody, ModalHeader, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form'
import { Loading } from "./LoadingComponent";

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    function RenderComments({comments,addComment, dishId}) {
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(comment.date))}
                            </p>
                            </li>
                        )   
                    })}
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment}/>
                </div>  
            )
        }
    }

    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

class CommentForm extends Component{
        constructor(props) {
            super(props)
            this.state = {
                isModalOpen : false
            }
            this.handleSubmit=this.handleSubmit.bind(this)
            this.toggleModal = this.toggleModal.bind(this)
        }
    
        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
        }
        
    
        handleSubmit(values){
            this.toggleModal()
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
        }
        render(){
            return (
                <div>
                    <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-edit fa-lg  "></span>
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Your Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="FormGroup">
                                <Col>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" name="rating" id="rating" className="form-control">
                                        <option>1 </option>
                                        <option>2</option>
                                        <option>3 </option>
                                        <option>4</option>
                                        <option>5 </option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="FormGroup">
                                <Col>
                                    <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".author" id="author" name="name" 
                                    placeholder="Your Name" 
                                    className="form-control"
                                    validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                        />
                                </Col>
                            </Row>
                            <Row className="FormGroup">
                                <Col>
                                    <Label htmlFor="message">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" className="bg-primary">
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
                
            )
        }
        
    }

    const Dishdetail = (props) => {
        if (props.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            )
        }
        else if(props.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if (props.dish!=null) {
            return (
                <div className = "container">
                    <div className="row">
                        <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className='row'>
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} 
                        addComment={props.addComment}
                        dishId={props.dish.id}/>
                    </div>  
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
        const dish = props.dish
        const comments = props.comments
        const dishId = props.dishId
        const addComment = props.addComment
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem =RenderDish(dish)
        const commentItem =RenderComments(comments, dishId, addComment)
        return (
            <div className = "container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className='row'>
                    <div className = "col-12 col-md-5 m-1 ">
                        {dishItem}
                    </div>
                    <div className = "col-12 col-md-5 m-1 ">
                        {commentItem}
                    </div>

                        
                </div>  
            </div>
            
        )
    }

export default Dishdetail;

//If we are not using any constructor or local states in a component, then we have an option to remove class name extends component
// and render function. Instead of this we can use user define functions and use props of main class while getting properties from parent main class