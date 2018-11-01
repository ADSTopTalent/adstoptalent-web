import React, { Component } from 'react';
import './App.css';
import './Transition.css';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
import MyAccount from './MyAccount';

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = { detail : null, firstname: '', lastname:'', emailId:''};
  }

  onChangeFirstName = (event) => {
    this.setState({firstname: event.target.value});
  }

  onChangeLastName = (event) => {
    this.setState({lastname: event.target.value});
  }

  onChangeEmailId = (event) => {
    this.setState({emailId: event.target.value});
  }

  onClickButton = () => {
  const firstname = this.state.firstname;
  const lastname = this.state.lastname;
  const emailId = this.state.emailId;

    console.log('emailId: ' +emailId+ 'firstname:' +firstname+ 'lastname:'+lastname);
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
          <h1 className="joinus">SIGN UP</h1>

          <TextField className="signuptextfield" value={this.state.firstname} 
          onChange={this.onChangeFirstName} label="FIRST NAME" 
          margin="normal" variant="outlined" required /><br />

          <TextField className="signuptextfield" value={this.state.lastname} 
          onChange={this.onChangeLastName} label="LAST NAME" 
          margin="normal" variant="outlined" required /><br />

          <TextField className="signuptextfield" value={this.state.emailId} 
          onChange={this.onChangeEmailId} type="email" label="EMAIL" 
          margin="normal" variant="outlined" required /><br />

          <input className="signupcheckbox" type="checkbox" /> Remember Me<br/><br />
          <button className="signupbtn" onClick={this.onClickButton}>CREATE ACCOUNT</button>
        </div>
      </div>
    );
  }
}
export default JoinUs;
