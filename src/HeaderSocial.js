import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './App.css';

class HeaderSocial extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-socials">
            <p className="phone">
              <a href="tel://1-800-488-6040" className="phonenumber"><span className="mm-phone-number">1-800-488-6040</span><i className="fa fa-fw fa-lg fa-phone"></i></a>
            </p>

            <ul className="social-icon">
              <li>
                <a href="" className="social-icon"> 
                  <i className="fa fa-facebook">
                  </i>
                </a>
              </li>      

              <li>
                <a href="" className="social-icon"> 
                  <i className="fa fa-twitter">
                  </i>
                </a>
              </li>
            
            </ul>
        </div>
      </div>
    );
  }
}

export default HeaderSocial;
