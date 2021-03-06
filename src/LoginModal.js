import React from 'react';
import './Header.css';
import './Transition.css';
import JoinUs from './JoinUs.js';
import Thanks from './Thanks';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link ,withRouter} from "react-router-dom";

const customStyles = {
  content : {
    position              : 'fixed',
    top                   : '35%',
    left                  : '50%',
    right                 : '45%',
    bottom                : '-11%',
    marginRight           : '-40%',
    transform             : 'translate(-50%, -30%)',
    zIndex                : '1100',
    background            : 'white',
    padding               : '0',
    marginBottom          : '53px',
    display               : 'block',
    overflow              : 'hidden',
    opacity               : '1'
  }
};
Modal.defaultStyles.overlay.zIndex = '1010';
Modal.defaultStyles.overlay.background = 'rgba(0, 0, 0, 0.26)';
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {emailId:'', password:''};
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {type:'password'};
    this.showHide = this.showHide.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

 showHide(){
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }
  
  onChangeEmailId = (event) => {
    this.setState({emailId: event.target.value});
  }

  onChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  onClickButton = () => {
  const emailId = this.state.emailId;
  const password = this.state.password;

    console.log('emailId: ' +emailId+ 'password:'+password);
    fetch('http://13.233.71.164:3000/login', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailId,
          password: password
        })
    })
    .then(response => response.json())
    .then(data => this.props.history.push({
      pathname: "/Thanks",
      state: {detail: data}
    }));
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
          overlayclassName="Overlay"
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal">
          <button className="crossbtn" onClick={this.closeModal}>
          <img className="crossimg" src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" />
          </button>
          <form className="loginform">                 
            <h2 className="logintitle">LOGIN</h2>

            <TextField className="logintextfield" type="email" value={this.state.emailId} 
            onChange={this.onChangeEmailId} margin="normal" label="EMAIL" 
            variant="outlined" required /><br />

            <TextField className="logintextfield" type={this.state.type} value={this.state.password} 
            onChange={this.onChangePassword} label="PASSWORD" margin="normal" 
            variant="outlined" required /><br />
        
            <span className="showpassword" onClick={this.showHide}> 
            {this.state.type === 'input' ? 'Hide' : 'Show'}</span>
                        
            <input className="logincheckbox" type="checkbox" />Remember me<br/>

            <button className="loginbtn">LOGIN</button><br />
      
            <a className="loginlinks" href="#">Forgot Password?</a><br/>
            <p>Don't have an account ?</p>
            <Link to ="/JoinUs" onClick={this.closeModal} className="signuplink">SIGN UP</Link>
          </form>
        </Modal>  
      </div>
    );
  }
}
export default LoginModal