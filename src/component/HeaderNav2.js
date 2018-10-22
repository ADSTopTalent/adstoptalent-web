import React, { Component } from 'react';
import {FaAngleDown} from 'react-icons/fa';
import HeaderLogo from './HeaderLogo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class HeaderNav2 extends Component {
  render() {
    return ( 
      <div className="main-nav-wrapper">
  			<ul className="nav-ul">  
    				<li className="dropdown">
     				 <Link to={'/users'} className="dropbtn">Ask Tony<FaAngleDown /></Link> 
    			  		<div className="dropdown-content">
     				   <Link to={'/askToAnything'}>Ask Tony Anything</Link>
     			 		</div>
  		 	 		</li>
  		  </ul>
  			<ul className="nav-ul">
    				<li className="dropdown">
     				<Link to={'/about'} className="dropbtn">about <FaAngleDown /></Link>
    			  		<div className="dropdown-content">
     				   <Link to ={'/aboutTonyRobbins'} title="About Tony Robbins">About Tony Robbins</Link>
     				   <Link to={'/'} title="Company Culture">Company Culture </Link>
      			  <Link to={'/'} title="Contribution">Contribution</Link>
     			 		</div>
  		 	 		</li>
  			</ul>
  			<ul className="nav-ul">
    				<li className="dropdown">
     				 <Link to={'/'} className="dropbtn" title="Store">Store <FaAngleDown /></Link>
    			  		<div className="dropdown-content">
     				   <Link to={'/'} title="All Products">All Products</Link>
     				   <Link to={'/'} title="Training Systems">Training Systems</Link>
     			 		</div>
  		 	 		</li>
  			</ul>
  			<ul className="nav-ul">
    				<li className="dropdown">
     				 <Link to={'/'} className="dropbtn" title="Experiences">Experiences <FaAngleDown /></Link>
    			  		<div className="dropdown-content">
         				  <Link to={'/'} title="All Upcoming Events">All Upcoming Events</Link>
         				  <Link to={'/'} title="Unleash the Power Within">Unleash the Power Within</Link>
          			  <Link to={'/'} title="Date With Destiny">Date With Destiny</Link>
          			  <Link to={'/'} title="Life & Wealth Mastery">Life & Wealth Mastery</Link>
          			  <Link to={'/'} title="Leadership Academy">Leadership Academy</Link>
          			  <Link to={'/'} title="Business Mastery">Business Mastery</Link>
          			  <Link to={'/'} title="Business Results Training">Business Results Training</Link>
          			  <Link to={'/'} title="Platinum Partnership">Platinum Partnership</Link>
          			  <Link to={'/'}title="Become a Crew Member">Become a Crew Member</Link>
     			      </div>
  		 	 		</li>
  			</ul>
  			<ul className="nav-ul">
    				<li className="dropdown">
     				 <Link to={'/'} className="dropbtn" title="Coaching">Coaching <FaAngleDown /></Link>
    			  		<div className="dropdown-content">
     				   <Link to={'/'} title="Results Coaching">Results Coaching</Link>
     			 		</div>
  		 	 		</li>
  			</ul>
  			<ul className="nav-ul">
    				<li className="dropdown">
     				 <Link to={'/'} className="dropbtn" title="Blog">Blog <FaAngleDown /></Link>
    			  		<div className="dropdown-content">
     				   <Link to={'/'} title="Read All Blogs">Read All Blogs</Link>
     				   
     			 		</div>
  		 	 		</li>
  			</ul>
      </div>
    );
  }
}

export default HeaderNav2;