import React, { Component } from 'react';
import './Header.css';
import Socialicons from './Socialicons';
import LoginModal from './LoginModal';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GlobalHeader extends Component {
  render() {
    return (
      <Router>
      	<div className="Gheader"> 
	      <Socialicons />
	      <LoginModal />
	    </div>
      </Router>
    );
  }
}
export default GlobalHeader
