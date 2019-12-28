import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
    import { Link } from 'react-router-dom'
import { Loading } from "./LoadingComponent";

    // instead of giving these two parameters in the form of objects, We can also use props 
    // just like props used in the second function
    // for user defined components, we use capital letter for writing name of function
    function RenderMenueItem({dish, onClick}) {
        return (
            <Card>
                <Link to ={`/menu/${dish.id}`}>

                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>

        )
    }

    function Menu(props) {
            const menu = props.dishes.dishes.map((dish) => {
                return (
                    <div  className="col-12 col-md-5 m-1" key={dish.id}>
                        <RenderMenueItem dish = {dish} onClick = {props.onClick}/>
                    </div>
                );
            });
            if (props.dishes.isLoading){
                return (
                    <div className="container">
                        <div className="row">
                            <Loading/>
                        </div>
                    </div>
                )
            }
            else if (props.dishes.errMess){
                return (
                    <div className="container">
                        <div className="row">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                )
            }
            else
                return (
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Menu</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>Menu</h3>
                                <hr />
                            </div>                
                        </div>
                        <div className="row">
                            {menu}
                        </div>
                    </div>
                );
        
    }

   

export default Menu;

//If we are not using any constructor or local states in a component, then we have an option to remove class name extends component
// and render function. Instead of this we can use user define functions and use props of main class while getting properties from parent main class