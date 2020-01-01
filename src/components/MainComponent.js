import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import { Navbar, NavbarBrand } from 'reactstrap';
import {Switch, Redirect, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const mapStateToProps = state => {
    return {
        dishes : state.dishes,
        comments : state.comments,
        leaders : state.leaders,
        promotions : state.promotions
    }

}

const mapDispatchToProps = dispatch => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    fetchLeaders: () => {dispatch(fetchLeaders())},
    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message))
})

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchDishes()
        this.props.fetchPromos()
        this.props.fetchComments()
        this.props.fetchLeaders()
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion ={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    leader ={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}

                />
            )
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}  
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                  postComment = {this.props.postComment} />
            );
          };
          
        return (
            <div>
            <Header/>
            <TransitionGroup>
                <CSSTransition key = {this.props.location.key} classNames = "page" timeout = {300}>
                    <Switch location={this.props.location}>
                        <Route path="/Home" component={HomePage}/>
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Route exact path="/contactus" component={()=> <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback = {this.props.postFeedback}/>}/>
                        <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />}/>
                        <Redirect to="/Home"/>
                    </Switch>
                 </CSSTransition>
            </TransitionGroup>
            <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));