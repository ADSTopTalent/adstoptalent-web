import React, { Component } from 'react';
import './App.css';
import Socialicons from './Socialicons';
import LoginModal from './LoginModal';

class GlobalHeader extends Component {
  render() {
    return (
      <div className="Gheader">
      <Socialicons />
      <LoginModal />
      </div>
    );
  }
}

export default GlobalHeader;
