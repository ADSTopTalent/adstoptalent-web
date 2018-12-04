import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link , withRouter} from 'react-router-dom';
import Signup2 from './Signup2';

class verify extends Component{

	constructor(props) {
		super(props);
		this.state = { detail : []}
	}
	componentDidMount(){
		console.log(this.props);
		console.log(this.props.match.params.id);
		var tokenid = this.props.match.params.id;
		//fetch('http://192.168.0.123:3000/verify', {
			fetch('http://13.233.71.164:3000/verify', {
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
			     pathname: "/Signup2",
			     state: {detail: data}  
			   }));
	}

	render(){
	return(
		<div>
		</div>
		)
}
}
export default withRouter(verify);