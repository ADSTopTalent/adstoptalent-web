import React, { Component } from 'react';
import HeaderSocial from './HeaderSocial';
import NavUtility from './NavUtility';
import './App.css';

class TopHeader extends Component {
  render() {
    return (
    <div id="header-bar-desktop" className="header-bar">
      	<div className="header-bar">
          <HeaderSocial/>    
          <NavUtility />
      	</div>
    </div>
    );
  }
}

export default TopHeader;
