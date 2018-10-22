import React, { Component } from 'react';

import '../App.css';

class HeaderLogo extends Component {
  render() {
    return (
   
      	<div>
            <div className="hidden-lg">
                <a href="#" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
            <ul className="nav-logo">
                <li><a href="#"><img src="https://static.wixstatic.com/media/614f9d_e4ee9b46d83b49cbb4c848442c285fd2~mv2.png/v1/crop/x_0,y_0,w_599,h_294/fill/w_163,h_80,al_c,usm_0.66_1.00_0.01/614f9d_e4ee9b46d83b49cbb4c848442c285fd2~mv2.png" className= "App-logo" alt="logo" /></a></li>
            </ul>
      </div>
      
    );
  }
}

export default HeaderLogo;
