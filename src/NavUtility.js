import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Popup from 'reactjs-popup';
import './App.css';

class NavUtility extends Component {

  render() {
    return (
     	<div className="container">
     		<button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Login</button>
 			<div className="modal fade" id="myModal" role="dialog">
    		<div className="modal-dialog">
  		    <div className="modal-content">

        		<div className="modal-header">
          			<button type="button" className="close" data-dismiss="modal">&times;</button>
          			<h4 className="modal-title">Welcome to ADS</h4>
        		</div>

        		<div className="modal-body">
          			<label>Username</label>: <input type="text"/> <br/>
          			<label>Password</label>: <input type="password"/>
        		</div>

	        	<div className="modal-footer">
	          		<button type="button" class="btn btn-default" data-dismiss="modal">Login</button>
	        	</div>
      		</div>
    		</div>
  			</div>
		</div> 
    );
  }
}

export default NavUtility;
