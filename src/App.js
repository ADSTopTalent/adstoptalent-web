import React, { Component } from 'react';
import './App.css';
import GlobalHeader from './GlobalHeader';
import SignUp from './SignUp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
library.add(faGhost)

class App extends Component {
  render() {
    return (
      	<div className="Gheader">
	      <GlobalHeader />
	    </div>
    )
  }
}

export default App;
