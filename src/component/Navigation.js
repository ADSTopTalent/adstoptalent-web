import React, { Component } from 'react';
import App from '../App.css'
//import ServicesSolutions from './Services&Solutions'
import Search  from './Search';

class Navigation extends Component {
  render() {
    return (     
      <div className="app-navigation">
          <ul className="app-navigation-ul">
          <li className="app-navigation-li"><a href="#" className="app-navigation-a">Products</a></li>
          <li className="app-navigation-li"><a href="#" className="app-navigation-a">Solutions</a></li>
          <li className="app-navigation-li"><a href="#" className="app-navigation-a">Resources</a></li>
          <li className="app-navigation-li"><a href="#" className="app-navigation-a">SUPPORT</a></li>
          <li className="app-navigation-li"><a href="#" className="app-navigation-a">PRICING</a></li>
          <li className="app-navigation-li"><a href="#" className="app-navigation-a">BLOG</a></li>
          <li className="app-navigation-li"><Search /></li>
          <li className="app-navigation-li"><a href="#" className="link-a">Login</a></li>
          <li className="app-navigation-li"><a href="#" className="link-a">New User</a></li>
          </ul>
          </div>    
    );
  }
}

export default Navigation;