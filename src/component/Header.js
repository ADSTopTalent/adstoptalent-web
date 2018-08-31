import React, { Component } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';
import Search  from './Search';

class Header extends Component {
  render() {
    return (
    	<div>
    		<header className="App-header">
          	<Logo />
	     	<Navigation />
	     	<p>Update </p>
         	</header>	 
     	</div>
    );}
}
export default Header