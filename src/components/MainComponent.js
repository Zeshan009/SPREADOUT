import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent'
import {DISHES} from '../shared/dishes'
import {PROMOTIONS} from '../shared/Promotions'
import {LEADERS} from '../shared/Leaders'
import {COMMENTS} from '../shared/Comments'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import { Navbar, NavbarBrand } from 'reactstrap';
import {Switch, Redirect, Route} from 'react-router-dom'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            dishes : DISHES,
            comments : COMMENTS,
            promotions : PROMOTIONS,
            leaders : LEADERS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    dish ={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion ={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader ={this.state.leaders.filter((leader) => leader.featured)[0]}

                />
            )
        }
        return (
            <div>
            <Header/>
            <Switch>
                <Route path="/Home" component={HomePage}/>
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
                <Route exact path="/contactus" component={Contact}/>
                <Redirect to="/Home"/>
            </Switch>
            <Footer/>
            </div>
        );
    }
}

export default Main;