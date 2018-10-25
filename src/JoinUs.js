import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
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

    console.log('emailId: ' +emailId+ 'firstName:' +firstname+ 'lastName:'+lastname);
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

        <h1 className="joinus">SIGN IN</h1>

        <TextField className="signuptextfield" id="outlined-name" label="FIRST NAME"  ref="firstname" margin="normal" variant="outlined" /><br />

        <TextField className="signuptextfield" id="outlined-name" label="LAST NAME"  ref="lastname" margin="normal" variant="outlined" /><br />

        <TextField className="signuptextfield" id="outlined-name" label="EMAIL"  ref="emailId" margin="normal" variant="outlined" /><br />

        <input className="signupcheckbox" type="checkbox" /> Remember Me<br/><br /><br />

        <button className="signupbtn" onClick={this.onClickButton}>CREATE ACCOUNT</button>

        </div>
      </div>
    );
  }
}
export default JoinUs;
