import React, { Component } from 'react';
import './App.css';

class HeaderContainer1 extends Component {
    constructor(props){
    super(props);
    this.state= {data:[{"title":"ASK TONY","menu":["ASK TONY ANYTHING"]}, {"title":"ABOUT","menu":["ABOUT TONY ROBBINS","COMPANY CULTURE","CONTRIBUTION"]},{"title":"STORE","menu":["ALL PRODUCTS","TRAINING SYSTEM"]},{"title":"EXPERIENCES","menu":["ALL UPCOMING EVENTS","UNLEASH THE POWER WITHIN","DATE WITHIN DESTINY","LIFE AND WEALTH MEASTRY","LEADERSHIP ACADEMY"]},{"title":"COACHING","menu":["RESULTS COACHING"]},{"title":"BLOG","menu":["READ ALL BLOGS"]}]};

  }
  render() {
    return (
      <div className="header-container">

            <ul className="nav-logo">
                <li>
                  <a href="/">
                    <img src="http://localhost:3000/ads.jpg"></img>
                  </a>
                </li>
            </ul>

            <div class="main-nav-wrapper">
              <ul id="menu-main-nav" className="nav-link hidden-xs hidden-sm">
                {this.state.data.map(function(data, i){
                  return <li id="menu-item-28000" className="dropdown">             
                    <a href="/ask-tony/" className="dropdown-toggle">{data.title}<i className="fa fa-angle-down"></i>
                    </a>
                     
                    <ul role="menu" className="dropdown-menu">
                      <li id="menu-item-28001" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28001">
                          <a title="Ask Tony Anything" href="/ask-tony/">{data.menu[0]}</a>
                          <a title="Ask Tony Anything" href="/ask-tony/">{data.menu[1]}</a>
                          <a title="Ask Tony Anything" href="/ask-tony/">{data.menu[2]}</a>
                      </li>
                    </ul>
                  </li>
                })}
              </ul>    
            </div>
      </div>
    );
  }
}

export default HeaderContainer1;
