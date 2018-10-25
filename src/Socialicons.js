import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Socialicons extends Component {
  render() {
    return (
      <div className="Gheader-social">
      	<ul>
      		<li>
      			<a href="https://www.affluencesolutions.com/upcoming-trainings?fbclid=IwAR0J2F3dGFCd0_aRJ-O_0DW0RTNxpJ5izIivUvAVt9rF0vr2EnOaX0TzqwU" target="_blank">
      				<i className="fab fa-facebook-f"></i>
      			</a>
      		</li>
      		<li>
      			<a href="https://twitter.com/AffluenceDigit1" target="_blank">
      				<i className="fab fa-twitter"></i>
      			</a>
      		</li>
      		<li>
      			<a href="https://www.linkedin.com/company/affluence-digital-solutions/" target="_blank">
      				<i className="fab fa-linkedin-in"></i>
      			</a>
      		</li>
      	</ul>
      </div>
    );
  }
}

export default Socialicons;
