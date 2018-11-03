import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyAccount from './MyAccount';
import Signup2 from './Signup2';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
import verify from './verify';

ReactDOM.render(

	<Router>	
		<div>
			<Route path='/MyAccount' component={MyAccount} />
			<Route path='/Signup2' component={Signup2} />
			<Route path='/verify/:id' component={verify} />
		</div>
	</Router>

, document.getElementById('root'));
registerServiceWorker();
