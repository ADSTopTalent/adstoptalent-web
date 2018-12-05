import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link , withRouter} from 'react-router-dom';
import GlobalHeader from './GlobalHeader';
import Navigation from './Navigation';
class sucess extends Component {
 render() {
 	console.log(this.props.location.state.detail2);
	var data = this.props.location.state.detail2;
   return (
   <div>
    <GlobalHeader />
	<Navigation />
    <h1>Hey {data.name} Thanks for Registeration </h1>
   	<h1>Hii!! Welcome to Affluence Digital Solution</h1>
   </div>
     )
 }
}

export default sucess;