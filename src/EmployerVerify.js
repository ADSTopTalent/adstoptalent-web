import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link , withRouter} from 'react-router-dom';
import EmployerSingUp2 from './EmployerSingUp2';

class EmployerVerify extends Component{

	constructor(props) {
		super(props);
		this.state = { details : []}
	}
	componentDidMount(){
		console.log(this.props);
		console.log(this.props.match.params.id);
		var tokenid = this.props.match.params.id;
		
			fetch('http://13.233.71.164:3000/verifyemployer', {
    			 method: 'POST',
		       headers: {
		         'Accept': 'application/json',
		         'Content-Type': 'application/json',
		       }, 
			       body: JSON.stringify({
			         token: tokenid
			       })
			   })
			   .then(response => response.json())
			   .then(data => this.props.history.push({
			     pathname: "/EmployerSingUp2",
			     state: {details: data}  
			   }));
	}

	render(){
		console.log(this.state.details)
	return(
		<div>
		</div>
		)
}
}
export default withRouter(EmployerVerify);
