import React, { Component } from 'react';
import './App.css';

class JoinUs extends Component {
  render() {
    return (
      <div>
        <form className="signupform">
          <p className="joinus">JOIN US</p><br />
          <label className="reqinfo">Required*</label><br />
          <label>FIRST NAME*</label><br />
          <input className="logintextfield" type="text"></input><br />
          <label>LAST NAME*</label><br />
          <input className="logintextfield" type="text"></input><br />
          <label>EMAIL ADDRESS*</label><br />
          <input className="logintextfield" type="Email"></input><br />
          <label>PASSWORD*</label><br />
          <input className="logintextfield" type="password"></input><br />
          <label>GENDER*</label><br />
          <input className="logintextfield" type="radio" name="gender" value="Female" />Female
          <input type="radio" name="gender" value="Male" />Male<br/>
          <button className="loginbtn">CREATE ACCOUNT</button>
        </form>
      </div>
    );
  }
}

export default JoinUs;
