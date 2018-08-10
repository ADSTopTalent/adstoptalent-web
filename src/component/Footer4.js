import React, { Component } from 'react';
import  '../App.css';
class Footer4 extends Component {
	constructor(props){
  	super(props);
			this.state={p1:'Partners',p2:'Amazon Web Services',p3:'Google Cloud Platform',
			p4:'IBM',p5:'Microsoft Azure', p6:'Red Hat',p7:'Certified module program',
			q1:'Company',q2:'About NGINX',q3:'Careers',q4:'Leadership',q5:'Press',q6:'Events'}
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
	</ul>
	</li>
	</ul>
	<ul className="footer-ul">
    	<li ><a className="footer-link-a " href="#">{this.state.q1}</a>
<ul className="footer-sub">
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q2}</a></li>
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q3}</a></li>
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q4}</a></li>
	<li className="footer-li"><a href="#" className="footer-link-a">{this.state.q5}</a></li>
	<li className="footer-li" ><a href="#" className="footer-link-a">{this.state.q6}</a></li>
	</ul>
</li>
</ul>
	</div>
    	    );}
}
export default Footer4;