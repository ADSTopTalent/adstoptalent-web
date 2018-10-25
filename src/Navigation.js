import React, { Component } from 'react';
import HeaderContainer1 from './HeaderContainer1';
import './App.css';

class Navigation extends Component {
  render() {
    return (
      <nav id="desktop-nav" className="clearfix" >
          <HeaderContainer1/>
      </nav>
    );
  }
}

export default Navigation;
