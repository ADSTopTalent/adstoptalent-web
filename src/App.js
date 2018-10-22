import React, { Component } from 'react';
import './App.css';
import GlobalHeader from './GlobalHeader';
import JoinUs from './JoinUs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
library.add(faGhost)

class App extends Component {
  render() {
    return (
      <div>
	        <GlobalHeader />
      <Router>
      	<div>
	      	<Route path="/JoinUs" component={JoinUs} />
      	</div>
      	</Router>
      </div>
    );
  }
}

export default App;
