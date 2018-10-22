import React, { Component } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav2 from './HeaderNav2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class HeaderNav extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-container ">
          <HeaderLogo />
          <Router>
            <HeaderNav2 />
          </Router >
        </div>
      </div>
    );
  }
}

export default HeaderNav;
