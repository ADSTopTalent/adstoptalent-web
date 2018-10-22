import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class HeaderLoginButton extends Component {
  render() {
    return (
            <div className="nav-utilities">
                <ul className="nav-utilities-ul-li"> 
                  <li ><Link to={'/'}>Join</Link></li>
                  <li ><Link to={'/'}>Login</Link></li>
                </ul>
            </div>            
    );
  }
}

export default HeaderLoginButton;