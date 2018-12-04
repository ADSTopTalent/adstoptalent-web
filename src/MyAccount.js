import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link , withRouter} from 'react-router-dom';
class MyAccount extends Component {


 render() {
 	console.log(this.props.location.state.detail2);
	var data = this.props.location.state.detail2;
   return (  
    <div>
   <h1>Hii!! Welcome to Affluence Digital Solution</h1>
      </div>
     )
 }
}

export default MyAccount;