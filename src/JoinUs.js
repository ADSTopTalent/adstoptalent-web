import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
import MyAccount from './MyAccount';

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = { detail : null}
  }

  onClickButton = () => {
    const firstname = this.refs.firstname.value;
    const lastname = this.refs.lastname.value;
    const emailId = this.refs.emailId.value;

    console.log('emailId: ' +emailId+ ',firstName:' +firstname+ ',lastName:'+lastname);
    fetch('http://192.168.0.123:3000/register', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          emailId: emailId  
        })
    })
    .then(response => response.json())
    .then(data => this.props.history.push({
      pathname: "/MyAccount",
      state: {detail: data}
    }));
  }

  render() {
    return (
      <div>
        <div className="signupform">

          <p className="joinus">JOIN US</p><hr />

          <label className="reqinfo">Required*</label><br />

          <label>FIRST NAME*</label><br />
          <input className="signuptextfield" type="text" ref="firstname" required /><br />
          
          <label>LAST NAME*</label><br />
          <input className="signuptextfield" type="text" ref="lastname" /><br />

          <label>EMAIL ADDRESS*</label><br />
          <input className="signuptextfield" type="email" ref="emailId" /><br /><br />

          <button className="signupbtn" onClick={this.onClickButton}>CREATE ACCOUNT click</button>
        </div>
      </div>
    );
  }
}
export default JoinUs;
