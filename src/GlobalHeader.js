import React, { Component } from 'react';
import './App.css';
import Socialicons from './Socialicons';
import LoginModal from './LoginModal';
import JoinUs from './JoinUs';
import MyAccount from './MyAccount';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GlobalHeader extends Component {
  render() {
    return (
      <Router>
      	<div className="Gheader"> 
	      <Socialicons />
	      <LoginModal />
	      <Route path ='/JoinUs' component={JoinUs} />
        <Route path ='/MyAccount' component={MyAccount} />
	    </div>
      </Router>
   
    );
  }
}

export default GlobalHeader;
