import React, { Component } from 'react';
import '../App.css';
import Hero from './Hero';
import Signup1 from './Signup1';

class Main extends Component {
  render() {
    return (
      <div >
          <Hero />
          <Signup1 />
      </div>
    );
  }
}

export default Main;
