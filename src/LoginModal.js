import React from 'react';
import './App.css';
import JoinUs from './JoinUs';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link ,withRouter} from "react-router-dom";

const customStyles = {
  content : {
    top                   : '35%',
    left                  : '50%',
    right                 : '40%',
    bottom                : '-10%',
    marginRight           : '-40%',
    transform             : 'translate(-50%, -30%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {showPassword: true,}
  }

  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      
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
                  <h2 className="logintitle">LOGIN</h2>

                  <legend>Sign in to view your <span className="GothaMedium">ADS</span> account and status.</legend><br />
                        
                  <label className="loginlabel">EMAIL ADDRESS*</label><br />

                  <input className="logintextfield" name="email" type="email"></input><br />
             
                  <label className="loginlabel">PASSWORD*</label><br />

                  <input className="logintextfield" name="password" type="password"></input><br />
                        
                  <input className="logincheckbox" type="checkbox" />Remember me<br/><br />

                  <a className="loginlinks" href="#">Forgot Password?</a><br /><br />

                  <button className="loginbtn">LOGIN</button><br />
                    
                </form>
                <p className="loginlinks">Don't have an account ?<a className="loginlinks" href="http://localhost:8000/JoinUs">Join us!</a></p>
              </Modal>  
        </div>
      );
  }
}
export default LoginModal