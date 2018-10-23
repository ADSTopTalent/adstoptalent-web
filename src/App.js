import React, { Component } from 'react';
import './AppNavigation.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Navigation from './Navigation';
import Footer from './component/Footer';
class App extends Component {
  render() {
    return (
      <div className="app-page"> 
        <Navigation />
      </div>
    );
  }
}

export default App;
