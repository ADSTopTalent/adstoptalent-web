import React, { Component } from 'react';
import './App.css';
import Socialicons from './Socialicons';
import LoginModal from './LoginModal';
import SignUp from './SignUp';
import MyAccount from './MyAccount';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GlobalHeader extends Component {
  render() {
    return (
      <Router>
      	<div className="Gheader"> 
	      <Socialicons />
	      <LoginModal />
	      <Route path ='/SignUp' component={SignUp} />
        <Route path ='/MyAccount' component={MyAccount} />
	    </div>
      </Router>
    );
  }
}
export default GlobalHeader
