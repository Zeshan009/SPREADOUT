import React, {Component} from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">SpreadOut</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
