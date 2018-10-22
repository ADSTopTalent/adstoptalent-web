import React, { Component } from 'react';
import  '../App.css';
class Footer1 extends Component {
  	constructor(props){
  	super(props);
this.state={p1:'Product', p2:"NGINX Plus", p3:'NGINX Controller', p4:'NGINX Unit', p5:'NGINX Amplify', p6:'NGINX Web Application Firewall',
q1:'NGINX on Github',q2:'NGINX Open Source',q3:'NGINX Unit',q4:'NGINX Amplify',q5:'NGINX Kubernetes Ingress Controller',q6:'nginMesh',
q7:'NGINX Microservices Reference Architecture',q8:'NGINX Crossplane'};
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
	</li></ul>
	<ul className="footer-ul">
    	<li ><a className="footer-link-a " href="#">{this.state.q1}</a>
<ul className="footer-sub">
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q2}</a></li>
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q3}</a></li>
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q4}</a></li>
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q5}</a></li>
	<li className="footer-li" ><a href="#" className="footer-link-a">{this.state.q6}</a></li>
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q7}</a></li>
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q8}</a></li>
</ul>
</li>
</ul>

    	</div>

    	    );}
}
export default Footer1;
