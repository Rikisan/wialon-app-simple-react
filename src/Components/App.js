import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../css/style.css';
// Wialon as 3rd Party
import Peticiones from './Peticiones';

export default class App extends Component {
  render() {
    
    return (
      <div>
        <span className="title">Simple</span>
			  <p><img src={logo} alt="app logo"/></p>
			  <span className="description">Simple template for developing your own Wialon App</span>
        <Peticiones />
      </div>
    );
  }
}
