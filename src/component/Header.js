import React, { Component } from 'react';
import HeaderSocials from './HeaderSocials';
import HeaderNav from './HeaderNav';

import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="header-bar">
        <div className="header-container">
        	<HeaderSocials />
        </div>
        <HeaderNav />
      </div>
    );
  }
}

export default Header;
