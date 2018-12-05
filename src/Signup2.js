import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import './App.css'
import sucess from './sucess';
import GlobalHeader from './GlobalHeader';
import Navigation from './Navigation';

class Signup2 extends Component {
      state = {
        detail2:[],massage:'',
          emailId:'',password:'',cpassword:'',address1:'',address2:'', city:'', state:'', zip:'',country:''
        };

        handleChangeEmail = (event) =>{
          this.setState({emailId:event.target.value});
        }
        handleChangePassword = (event) =>{
          this.setState({password:event.target.value});
        }
        handleChangeConfirmPassword = (event) =>{
          this.setState({cpassword:event.target.value});
        }
        handleChangeAddress1 = (event) =>{
          this.setState({address1:event.target.value});
        }
        handleChangeAddress2 = (event) =>{
          this.setState({address2:event.target.value});
        }
        handleChangeCity = (event) =>{
          this.setState({city:event.target.value});
        }
        handleChangeState = (event) =>{
          this.setState({state:event.target.value});
        }
         handleChangeZip = (event) =>{
          this.setState({zip:event.target.value});
        }
         handleChangeCountry = (event) =>{
          this.setState({country:event.target.value});
        }

        onRegisterMe=()=>{
          if (this.state.password === this.state.cpassword) {
              this.setState({massage:''});
             // fetch('http://192.168.0.123:3000/registerfinal', {
              fetch('http://13.233.71.164:3000/registerfinal', {
            method: 'POST',
            headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json',
            }, 
              body: JSON.stringify({
                emailId: this.state.emailId,
                password: this.state.password,
                cpassword: this.state.cpassword,
                address1: this.state.address1,
                address2: this.state.address2,
                city : this.state.city,
                state : this.state.state,
                zip : this.state.zip,
                country: this.state.country
              })
          })
             .then(response => response.json())
             .then(data => this.props.history.push({
                pathname: "/sucess",
                state: {detail2: data}  
              }));
        }else{
            this.setState({massage:'password does not match'});
          }
      }

 render() {
	var data = this.props.location.state.detail;
   return (  
    <div>
      <div className="Gheader">
        <GlobalHeader />
        <Navigation />
      </div>
    <div className="App">
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Step Second
      </Typography>
      <Grid container spacing={24}  direction="column"  alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            margin="normal"
            variant="outlined"
           value={data.firstname}
           className="textfield"
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            autoComplete="lname"
            variant="outlined"
            value={data.lastname}
             margin="normal"
              className="textfield"
          /> 
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emIL"
            value={this.state.emailId}
            onChange={this.handleChangeEmail}
            label="Email ID"
            autoComplete="email"
            variant="outlined"
            margin="normal"
             className="textfield"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          label="Password"
          type="password"
          value={this.state.password}
          onChange={this.handleChangePassword}
          variant="outlined"
           margin="normal"
            className="textfield"
          />
          </Grid>
           <p style={{color: 'red'}}>{this.state.massage}</p>
          <Grid item xs={12} sm={6}>
        <TextField
          required
          label="Confirm Password"
          type="password"
          value={this.state.cpassword}
          onChange={this.handleChangeConfirmPassword}
          variant="outlined"
          margin="normal"
           className="textfield"
          />
          </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            value={this.state.address1}
            onChange={this.handleChangeAddress1}
            label="Address line 1"
            autoComplete="billing address-line1"
            variant="outlined"
             margin="normal"
              className="textfield"
          />
        </Grid> 
        <Grid item  xs={12} sm={6}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            margin="normal"
            value={this.state.address2}
            onChange={this.handleChangeAddress2}
            autoComplete="billing address-line2"
            variant="outlined"
             className="textfield"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
             value={this.state.city}
            onChange={this.handleChangeCity}
            autoComplete="billing address-level2"
            variant="outlined"
            margin="normal"
             className="textfield"
          />
        </Grid>
        <Grid item xs={12}  sm={6}>
          <TextField id="state" name="state"
            value={this.state.emaild}
            onChange={this.handleChangeEmail}
            label="State/Province/Region" variant="outlined"
            margin="normal" 
            value={this.state.state}
            onChange={this.handleChangeState}
             className="textfield"
                     />
          
        </Grid>
        <Grid item xs={12}  sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
           margin="normal"
            autoComplete="billing postal-code"
             value={this.state.zip}
            onChange={this.handleChangeZip}
            variant="outlined"
             className="textfield"
          />
        </Grid>
        <Grid item xs={12}  sm={6} >
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            margin="normal"
             value={this.state.country}
            onChange={this.handleChangeCountry}
            autoComplete="billing country"
            variant="outlined"
            color="primary"
             className="textfield"
          />
        </Grid>
        <Grid item xs={12}  sm={6}>
          <FormControlLabel
            control={<Checkbox color="#f44336" color="primary" name="saveAddress" value="yes" />}
            label="All Details are Right "
          />
        </Grid>
      </Grid>
    </React.Fragment>
      <Button variant="contained" className="btn" color="primary" onClick={this.onRegisterMe}> Register Me</Button>
      </div>
      </div>
     )
 }
}

export default Signup2;