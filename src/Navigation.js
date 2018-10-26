import React, { Component } from 'react';
import HeaderContainer1 from './HeaderContainer1';
import AppNavigation from './AppNavigation.css';

class Navigation extends Component {
  
  /*constructor(props) {
      super(props);
      this.state = {
      scrollingLock: false
      };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
    }

	componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
  	  if (window.scrollY > 40) {
    	console.log("should lock");
    	this.setState({
      	scrollingLock: true,
      });
  	} else if (window.scrollY < 40) {
      console.log("not locked" );
      this.setState({
      scrollingLock: false
      });
  	}
  	style={{ width: "100%", position: this.state.scrollingLock ? "fixed": "relative"}}
} */
	componentDidMount (){


var navbar = document.getElementById("desktop-nav");



  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

}

  	render() {
    return (
    	<div className="sticky" >
      	<nav id="desktop-nav" className="clearfix" >
          <HeaderContainer1/>
      	</nav>
      	</div>
      	
    );
  }
}

export default Navigation;
