import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Popup from 'reactjs-popup';
import Modal from 'react-modal';

class Login extends Component {
	state= {show: false};

	showModal = () => {
    	this.setState({ show: true });
	};

	hideModal = () => {
    	this.setState({ show: false });
	};

  render() {
    return (
    	<main>
    		<div className="nav-utilities">
      			<ul>
      				<li id="login">
	      				<Modal show={this.state.show} handleClose={this.hideModal}>
	      				</Modal>
	      				<a href="#" onClick={this.showModal} id="member-portal">Login</a>
      				</li>
      			</ul>
      		</div>
    	</main>
    );
  }
}
const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Login />, container);
export default Login;
