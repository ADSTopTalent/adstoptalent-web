import React, { Component } from 'react';
import App from '../App.css'
//import ServicesSolutions from './Services&Solutions'

class Navigation extends Component {
  render() {
    return (
     
      <div className="app-navigation">
          <ul className="ul">
          <li className="li">Products</li>
          <li className="li">Solutions</li>
          <li className="li">Resources</li>
          <li className="li">SUPPORT</li>
          <li className="li">PRICING</li>
          <li className="li">BLOG</li>
          <li  ><input type ="search" className="search" />Search</li>
          
           <button>Login</button>
        <button>Sign Up</button></ul>
          </div>

      


      
    );
  }
}

export default Navigation;