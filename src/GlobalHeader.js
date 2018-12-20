import React, { Component } from 'react';
import './Header.css';
import Socialicons from './Socialicons';
import LoginModal from './LoginModal';
<<<<<<< HEAD
import JoinUs from './JoinUs';
import Thanks from './Thanks';
import Verify from './Verify';
=======
>>>>>>> 6587523f99e3a94b7a4a17edfd3daec58e745cf5
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GlobalHeader extends Component {
  render() {
    return (
      <Router>
      	<div className="Gheader"> 
	      <Socialicons />
	      <LoginModal />
<<<<<<< HEAD
	      <Route path ='/JoinUs' component={JoinUs} />
        <Route path ='/Thanks' component={Thanks} />
        <Route path = '/verify/:id' component={Verify}
=======
>>>>>>> 6587523f99e3a94b7a4a17edfd3daec58e745cf5
	    </div>
      </Router>
    );
  }
}
export default GlobalHeader
