import React, { Component } from 'react';
import  '../App.css';
class Footer2 extends Component {
	constructor(props){
  	super(props);
			this.state={p1:'Solutions',
			p2:'ADC / Load balancing', 
			p3:'Microservices', 
			p4:'Security',
			p5:'Web & mobile performance', 
			p6:'API Gateway'}
 	 }
 	 render() {
    return (


<div>
    	<ul className="footer-ul">
    	<li ><a className="footer-link-a" href="#">{this.state.p1}</a>
		<ul className="footer-sub">
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.p2}</a></li>
	<li  className="footer-li"><a href="#" className="footer-link-a">{this.state.p3}</a></li>
	<li  className="footer-li"><a href="#" className="footer-link-a">{this.state.p4}</a></li>
	<li className="footer-li" ><a href="#" className="footer-link-a">{this.state.p5}</a></li>
	<li className="footer-li" ><a href="#" className="footer-link-a">{this.state.p6}</a></li>
	</ul>
	</li>
	</ul>
	</div>
    	    );}
}
export default Footer2;