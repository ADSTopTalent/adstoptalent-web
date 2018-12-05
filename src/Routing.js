import React , {Component} from 'react';
import MyAccount from './MyAccount';
import Signup2 from './Signup2';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
import verify from './verify';
import JoinUs from './JoinUs';
import App from './App';
import sucess from './sucess';

class Routing extends Component{
	render(){
	return(
		<div>
		<Router>	
			<div>

				<Route exact path='/' component={App} />
				<Route path='/sucess' component={sucess} />
				<Route path='/JoinUs' component={JoinUs} />
				<Route path='/MyAccount' component={MyAccount} />
				<Route path='/Signup2' component={Signup2} />
				<Route path='/verify/:id' component={verify} />
			</div>
		</Router>

		</div>
		)
}
}
export default Routing;