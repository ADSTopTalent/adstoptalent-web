import React, { Component } from 'react';
import './App.css';
import GlobalHeader from './GlobalHeader';
import JoinUs from './JoinUs';
import Navigation from './Navigation';
import Main from './component/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
library.add(faGhost)

class App extends Component {
  render() {
    return (
      	<div className="Gheader">
	      <GlobalHeader />
	      <Navigation />
	      <Main />
	    </div>
      )
  }
}

export default App;
