import React, { Component } from 'react';
import './Header.css';
import GlobalHeader from './GlobalHeader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
library.add(faGhost)

class App extends Component {
  render() {
    return (
      	<div>
	      <GlobalHeader />
	    </div>
    )
  }
}

export default App;
