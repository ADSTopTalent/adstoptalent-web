import React, { Component } from 'react';
import  '../App.css';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';
class Footer extends Component {
  render() {
    return (
    	 <div className="app-footer">
    	 <div className="app-footer1">
    	<Footer1 />
    	</div >
    	<div  className="app-footer1">
    	<Footer2 />
    	</div>
    	<div  className="app-footer1">
    	<Footer3 />
    	</div>
    	<div  className="app-footer1">
    	<Footer4 />
    	</div>
  	 	 </div>
    );}
}
export default Footer