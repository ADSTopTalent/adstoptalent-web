import React, { Component } from 'react';
import {FaFacebookF,FaTwitter} from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderLoginButton from './HeaderLoginButton';
import '../App.css';

class HeaderSocials extends Component {
  render() {
    return (
    	
    <div className="header-socials">
      	<p >
      	<a href="tel://1-800-488-6040" class="phonenumber"><span class="mm-phone-number">1-800-488-6040</span><i class="fa fa-fw fa-lg fa-phone"></i></a>
        </p>
	    <ul>
	       <li className="icon">
	          <a href="https://facebook.com/tonyrobbins" target="_blank"><FaFacebookF /></a>
	       </li>
	       <li className="icon">
	        <a href="https://twitter.com/tonyrobbins" target="_blank">
	          <FaTwitter /> </a>
	       </li>
	    </ul>
	<div>
		<Router>
	    <HeaderLoginButton />
	    </Router>
	    </div>
	        </div>

    );
  }
}

export default HeaderSocials;
