import React, { Component } from 'react';
import Header from './component/Header';
import Main from './component/Main'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
          <Header />
          <Main />
          
      </div>
    );
  }
}

export default App;
