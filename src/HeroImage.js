import React, { Component } from 'react';
import './App.css';
import IntroContent from './IntroContent';

class HeroImage extends Component {
  render() {
    return (
      <div className="intro intro-primary parallax-container intro-overlayed">      
        <div id="background" className="home-hero-image">
        </div>
   		<IntroContent />
      </div>
    );
  }
}

export default HeroImage;
