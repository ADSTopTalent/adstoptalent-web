import React, { Component } from "react";


export class Slide1 extends Component {
  render(){ 
  return(
  	<div>
  	 <h3>ADS Tptalent</h3>
  	 <h1 className="home-slid-one-h1"></h1>
	</div>
  	)};
  }

 export class Slide2 extends Component {
  render(){ 
  return(
  	<div>
  	 <h3>ADS Tptalent</h3>
  	 <h1 className="home-slid-one-h1">Second page</h1>
     <img src="https://cdn-1.wp.nginx.com/wp-content/uploads/2018/06/X18-hero-696x804@2x.png" className="app-hero" alt="load" />
	</div>
  	)};
  }
  
  export class Slide3 extends Component {
  render(){ 
  return(
  	<div>
 		<h1 className="home-slid-one-h1">The NGINX Application Platform powers Load Balancers, Microservices and API Gateways
           <a href="https://www.adstoptalent.com/" className="nginx-button" >Learn More</a>
           <a href="https://www.adstoptalent.com/" className="nginx-button" >ADS</a></h1>
          <img src="https://cdn-1.wp.nginx.com/wp-content/uploads/2018/04/hero-Application-Platform.svg" className="app-hero" alt="load" />
  	</div>
  	)};
  }

  export class Slide4 extends Component {
  render(){ 
  return(
  	<div>
	<h3>Forth Page</h3>
  	</div>
  	)};
  }
 