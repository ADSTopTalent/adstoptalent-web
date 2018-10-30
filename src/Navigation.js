import React, { Component } from 'react';
import HeaderContainer1 from './HeaderContainer1';
import AppNavigation from './AppNavigation.css';

class Navigation extends Component {
  
  	constructor(props) {
      super(props);
      this.state = {
      scrollingLock: false,
      };
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
    	this.setState({
      	scrollingLock: true,
      	});
	  } else if (window.scrollY <= 40) {
      this.setState({
      scrollingLock: false
      });
  	} 	
    	
  	}
  	
} 
	
  	render() {
    return (
      	<nav id="desktop-nav"  className="clearfix" style={{	width: "100%", position:this.state.scrollingLock ? "fixed": "relative",top:this.state.scrollingLock ? "0px":"40px"}}>
          <HeaderContainer1/>
      	</div>
    );
  }
}

export default Navigation;
