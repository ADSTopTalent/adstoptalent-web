import React, { Component } from 'react';
import './Header.css';
import Socialicons from './Socialicons';
import LoginModal from './LoginModal';
import JoinUs from './JoinUs';
import Thanks from './Thanks';
import verify from './verify';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EmployerRegistraion from './EmployerRegistraion'

class GlobalHeader extends Component {
  render() {
    return (
      <Router>
      	<div className="Gheader"> 
	      <Socialicons />
	      <LoginModal />
	      <Route path ='/JoinUs' component={JoinUs} />
        <Route path ='/Thanks' component={Thanks} />
 	      <Route path = '/verify/:id' component={verify} />
        <Route path ='/EmployerRegistraion' component={EmployerRegistraion} />
	    </div>
      </Router>
    );
  }
}
export default GlobalHeader
