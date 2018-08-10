import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';

class App extends Component {
  render() {
    return (
      <div className="app-page">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;
