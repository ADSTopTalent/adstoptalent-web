import React, { Component } from 'react';
import './App.css';
import GlobalHeader from './GlobalHeader';
import JoinUs from './JoinUs';
import Main from './component/Main';
import Navigation from './Navigation';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import Image from './Image';
library.add(faGhost)

class App extends Component {
  render() {
    return (
      <div className="Gheader">
	       <GlobalHeader />
	       <Navigation />
	       <Main />
	       <Image />
      </div>
    )
  }
}

export default App;
