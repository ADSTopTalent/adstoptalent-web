import React, { Component } from 'react';
import './App.css';
import Socialicons from './Socialicons';
import LoginModal from './LoginModal';
import JoinUs from './JoinUs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GlobalHeader extends Component {
  render() {
    return (
      <Router>
      	<div className="Gheader"> 
	      <Socialicons />
	      <LoginModal />
	      <Route path='/JoinUs' component={JoinUs} />
	    </div>
      </Router>
   
    );
  }
}

export default GlobalHeader;
