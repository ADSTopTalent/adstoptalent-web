import React, { Component } from 'react';
import './AppNavigation.css';

class HeaderContainer1 extends Component {
    constructor(props){
    super(props);
    this.state= {data1:[{"title":"Home","menu":["ADS1"]}], data2:[{"title":"ABOUT","menu":["ABOUT ADS","COMPANY CULTURE","CONTRIBUTION"]}],data3:[{"title":"STORE","menu":["ALL PRODUCTS","TRAINING SYSTEM"]}],data4:[{"title":"EXPERIENCES","menu":["ALL UPCOMING EVENTS","UNLEASH THE POWER WITHIN","DATE WITHIN DESTINY","LIFE AND WEALTH MEASTRY","LEADERSHIP ACADEMY"]}],data5:[{"title":"COACHING","menu":["RESULTS COACHING"]}],data6:[{"title":"BLOG","menu":["READ ALL BLOGS"]}]};

  }
  render() {
    return (
      <div className="header-container">

            <ul className="nav-logo">
                <li>
                  <a href="/">
                    <img src="new.jpg"></img>
                  </a>
                </li>
            </ul>

            <div className="main-nav-wrapper">
              <ul id="menu-main-nav" className="nav-link hidden-xs hidden-sm">
                {this.state.data1.map(function(data1, i){
                  return <li id="menu-item-28000" className="dropdown">             
                    <a href="/ads/" className="dropdown-toggle">{data1.title}<i className="fa fa-angle-down"></i>
                    </a>
                     
                    <ul role="menu" className="dropdown-menu">
                      <li id="menu-item-28001" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28001">
                          <a title={data1.menu[0]} href={data1.menu[0]}>{data1.menu[0]}</a>
                      </li>
                    </ul>
                  </li>
                })}

                {this.state.data2.map(function(data2, i){
                  return <li id="menu-item-28000" className="dropdown">             
                    <a href="/about/" className="dropdown-toggle">{data2.title}<i className="fa fa-angle-down"></i>
                    </a>
                     
                    <ul role="menu" className="dropdown-menu">
                      <li id="menu-item-28001" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28001">
                          <a title={data2.menu[0]} href={data2.menu[0]}>{data2.menu[0]}</a>
                          <a title={data2.menu[1]} href={data2.menu[1]}>{data2.menu[1]}</a>
                          <a title={data2.menu[2]} href={data2.menu[2]}>{data2.menu[2]}</a>
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
