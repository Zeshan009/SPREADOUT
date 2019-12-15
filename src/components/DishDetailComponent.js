import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


    function RenderComments(comments) {
        if (comments == null) {
            return (<div></div>)
        }
        const cmnts = comments.map(comment => {
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
        })
        return (
            <div>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>

            </div>
        )
    }

    function RenderDish(dish) {
        if (dish != null) {
            return (
                <div>
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
        else {
            return (<div></div>)
        }
    }

    const Dishdetail = (props) => {
        const dish = props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem =RenderDish(dish)
        const commentItem =RenderComments(dish.comments)
        return (
            <div className = "container">
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