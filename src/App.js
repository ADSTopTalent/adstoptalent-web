import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader';
import JoinUs from './JoinUs';
import Main from './component/Main';
//import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './AppNavigation.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';


library.add(faGhost)
  
class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <GlobalHeader />
          
          <Main />
	      	<Route path="/JoinUs" component={JoinUs} />
      	</div>
      </Router>    
    );
  }
}

export default App;
