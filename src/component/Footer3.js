import React, { Component } from 'react';
import  '../App.css';
class Footer3 extends Component {

	constructor(props){
		super(props);
		this.state={p1:'Resources',p2:'Documentation',p3:'Ebooks',p4:'Webinars',p5:'Case studies',p6:'Blog',
		p7:'FAQ',p8:'Glossary',q1:'Support',q2:'Professional Services',q3:'Training'}
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
			<li className="footer-li" ><a href="#" className="footer-link-a">{this.state.p7}</a></li>
			<li className="footer-li" ><a href="#" className="footer-link-a">{this.state.p8}</a></li>
		</ul>
	</li></ul>
		<ul className="footer-ul">
    	<li ><a className="footer-link-a " href="#">{this.state.q1}</a>
	<ul className="footer-sub">
		<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q2}</a></li>
		<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q3}</a></li>
	</ul>
</li>
</ul>

    	</div>

    	    );}
}
export default Footer3;