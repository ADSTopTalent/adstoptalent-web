import React, { Component } from 'react';
import '../App.css';
import HeroData from './HeroData';

class Hero extends Component {
  render() {
    return (
		<div className="hero">
    	   <HeroData />
      	</div>
    );
  }
}

export default Hero;
