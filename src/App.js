import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Footer from './component/Footer';
class App extends Component {
  render() {
    return (
      <div className="app-page">  
        <Header />
        <Hero />
        <Footer />
        <p> Hello Mukul </p>
      </div>
    );
  }
}

export default App;
