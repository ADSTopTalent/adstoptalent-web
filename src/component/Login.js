import React, { Component } from 'react';

class Login extends Component { 
	constructor(props){
 		super(props);
 		this.state={userid:"",userPass:"",massage:""};
 	
	 	this.Handleuserid = (event) => {
 			console.log(event.target.value);
 			this.setState({userid:event.target.value});
 		};
 		this.Handlepassword = (event) => {
 			console.log(event.target.value);
 			this.setState({userPass:event.target.value});
 		};
 		this.hello = () =>{
 			 document.write ("Hello World");
 		}
 		this.LoginHandle = () =>{
 			if(this.state.userid==="admin" && this.state.userPass==="admin")
 			{
 				this.setState({massage:" "});
 				this.hello();
 			} else
 			{
 				this.setState({massage:"Wrong userName or Password"});}

 		}
 	};
  	render() {
    return (
     <div className="login">
     <form>
       <p className="error">{this.state.massage}</p>
       <input className="login-input" type="text" value={this.props.userid} onChange={this.Handleuserid} placeholder="Username"/> 
       <input className="login-input" type="password" value={this.props.userPass} onChange={this.Handlepassword} placeholder="Password"/>
       <button className="app-button" onClick={this.LoginHandle}>Login</button>
      </form>
     </div>
    );
  }
}

export default Login;