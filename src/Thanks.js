import React, { Component } from 'react';
import './Header.css';
import JoinUs from './JoinUs'
import EmployerRegistraion from './EmployerRegistraion';

class Thanks extends Component {
  render() {
  	console.log(this.props.location.state.detail)
    return (
      	<div className="thanks">
	      <h1>Thanks for registering with us!!</h1><br />
	      <h2>Kindly check your email for the further details.{this.props.location.state.detail}</h2>
	    </div>
      )
  }
}

export default Thanks;
