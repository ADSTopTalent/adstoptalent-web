import React, { Component } from 'react';
import './Transition.css';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
import { hashHistory } from 'react-router';
import Thanks from './Thanks';
import Error from './Error';
import Modal from 'react-modal';

const customStyles = {
  content : {
    position              : 'fixed',
    top                   : '35%',
    left                  : '50%',
    right                 : '45%',
    bottom                : '-18%',
    marginRight           : '-40%',
    transform             : 'translate(-50%, -30%)',
    zIndex                : '1100',
    background            : 'white',
    padding               : '0',
    marginBottom          : '53px',
    display               : 'block',
    overflow              : 'hidden',
    opacity               : '1',
    textAlign             : 'center',
  }
};
Modal.defaultStyles.overlay.zIndex = '1010';
Modal.defaultStyles.overlay.background = 'rgba(0, 0, 0, 0.26)';
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = { detail : null, firstname: '', lastname:'', emailId:''};
    this.state = {modalIsOpen: true};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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

  onClickButton = (e) => {
    e.preventDefault();
  const firstname = this.state.firstname;
  const lastname = this.state.lastname;
  const emailId = this.state.emailId;

    if((this.state.firstname || this.state.firstname || this.state.firstname) === null){
      this.props.history.push('/Error');
    }
    console.log('emailId: ' +emailId+ 'firstname:' +firstname+ 'lastname:'+lastname);
    fetch('http://13.233.71.164:3000/register', {
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
    .then(data => this.setState({detail:data}))
    .then(data => this.checkDetail(data))
   }
 
    checkDetail = (data) =>{
      console.log(this.state.detail);
      if(this.state.detail == "null"){
        this.setState({error:'Email Already Exist'})
        
      }
      else{
        this.props.history.push({
          pathname:"/Thanks",
          state:{detail:data}
          })
         
      }
    }

  render() {
    return (
      <div>
        <div className="signupform">
          <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          overlayclassName="Overlay"
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal">
             <button className="crossbtn" onClick={this.closeModal}><Link to="App">
              <img className="crossimg" src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png"></img>
            </Link></button>
            <h2>{this.state.error}</h2>
          <form>

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

          <button className="signupbtn" onClick={(e) => this.onClickButton(e)}>CREATE ACCOUNT</button>
          </form>
          </Modal>
        </div>
      </div>
    );
  }
}
export default withRouter(JoinUs);
