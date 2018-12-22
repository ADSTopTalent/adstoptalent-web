import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';  
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link ,withRouter} from "react-router-dom";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Thanks from './Thanks';

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

const styles = theme => ({
  container: {
    
  },
  textField: {
    width: 322,
   
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    
  },
});

const Employee = [
  {
    value: '0-10',
    label: '0-10',
  },
  {
    value: '11-25',
    label: '11-25',
  },
  {
    value: '26-100',
    label: '26-100',
  },
  {
    value: '101-500',
    label: '101-500',
  },
  {
    value: '500+',
    label: '500+',
  },
];



class EmployerRegistraion extends React.Component {
  constructor() {
    super();
    this.state = { details: null, Organization:'', EmailId:'',Name:'', Designation:'', Employee:''};
    this.state = {modalIsOpen: true};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
   }

  openModal() {
    this.setState({modalIsOpen: false});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  onChangeOrganization = (event) => {
    this.setState({Organization: event.target.value});
  }

  onChangeEmailId = (event) => {
    this.setState({EmailId: event.target.value});
  }

  onChangeName = (event) => {
    this.setState({Name: event.target.value});
  }

  onChangeDesignation = (event) => {
    this.setState({Designation: event.target.value});
  }

  onChangeEmployee = (event) => {
    this.setState({Employee: event.target.value});
  }

  onClickButton = (e) => {
    e.preventDefault();
  console.log('am in click func');
  const Organization = this.state.Organization;
  const EmailId = this.state.EmailId;
  const Name = this.state.Name;
  const Designation = this.state.Designation;
  const Employee = this.state.Employee;

    if((this.state.Organization || this.state.EmailId || this.state.Name || this.state.Designation || this.state.Employee) === null){
      this.props.history.push('/Error');
    }
    
    fetch('http://13.233.71.164:3000/registeremployer', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Organization: Organization,
          EmailId: EmailId,
          Name: Name,
          Designation: Designation,
          Employee: Employee  
        })
    })
    .then(response => response.json())
    .then(data => this.props.history.push({
      pathname: "/Thanks",
      state: {details: data}
    }));
  }
    
 
    

   render() {
    const { classes } = this.props;
    return (
      <div className="nav-utilities">

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          overlayclassName="Overlay"
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal">
            <button className="crossbtn" onClick={this.closeModal}><Link to="App">
              <img className="crossimg" src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/close-512.png" />
            </Link></button>
            <h2>{this.state.error}</h2>
            <form className="Registeration">                 
              <h1 id="text">Employer Registeration</h1>
              <TextField className="signuptextfield" value={this.state.Organization} 
              onChange={this.onChangeOrganization} label="Organization Name" 
              margin="normal" variant="outlined" required /><br />

              <TextField className="signuptextfield" value={this.state.EmailId} 
              onChange={this.onChangeEmailId} type="email" label="Email Id" 
              margin="normal" variant="outlined" required /><br />

              <TextField className="signuptextfield" value={this.state.Name} 
              onChange={this.onChangeName}  label="Name" 
              margin="normal" variant="outlined" required /><br />

              <TextField className="signuptextfield" value={this.state.Designation} 
              onChange={this.onChangeDesignation}  label="Designation" 
              margin="normal" variant="outlined" required /><br />

              <TextField
                id="outlined-select-currency"
                select
                label="No of Employee"
                className={classes.textField}
                value={this.state.Employee}
                onChange={this.onChangeEmployee}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
                variant="outlined"
                required
              >
                {Employee.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField><br/><br/>
            
              <button className="Sign" onClick={this.onClickButton}>Sign Up</button>  
            </form>
        </Modal>  
      </div>
    );
  }
}

EmployerRegistraion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployerRegistraion);