import React from 'react';
import './App.css';
import JoinUs from './JoinUs';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <Router>
        <div className="nav-utilities">
          <ul>
            <li id="login">
              <button type="button" onClick={this.openModal} id="member-portal">Login</button>
            </li>
          </ul>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <button className="crossbtn" onClick={this.closeModal}>X</button>

                <form>
                  <h2 className="signintitle">LOGIN</h2>
                  <legend>Sign in to view your <span className="GothaMedium">ADS</span> account and status.</legend><br />
                  <label>EMAIL ADDRESS*</label><br />
                  <input className="logintextfield" type="Email"></input><br />
                  <label>PASSWORD*</label><br />
                  <input className="logintextfield" type="password">
                  </input><br />
                  
                  <input type="checkbox" />Remember me<br/><br />
                  <a className="loginlinks" href="#">Forgot Password?</a><br />
                  <button className="loginbtn">LOGIN</button><br />
                  Don't have an account ?
                  <Route path='/JoinUs' component={JoinUs} /> 
                  <Link to = '/JoinUs'>Join us!</Link>
                </form>
              </Modal>  
        </div>
      </Router>
    );
  }
}
export default LoginModal