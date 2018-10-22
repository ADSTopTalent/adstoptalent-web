import React, { Component } from 'react';
import './App.css';

class JoinUs extends Component {
  render() {
    return (
      <div>
        <form>
          <label className="reqinfo">Required*</label><br />
          <label>FIRSTNAME*</label><br />
          <input type="text"></input><br />
          <label>LASTNAME*</label><br />
          <input type="text"></input><br />
          <label>EMAIL ADDRESS*</label><br />
          <input type="Email"></input><br />
          <label>PASSWORD*</label><br />
          <input type="password"></input><br />
          <label>CONFIRM PASSWORD*</label><br />
          <input type="password"></input><br />
          <label>GENDER*</label><br />
          <input type="checkbox" />Female
          <input type="checkbox" />Male<br/>
          <button className="loginbtn">CREATE ACCOUNT</button>

        </form>
      </div>
    );
  }
}

export default JoinUs;
