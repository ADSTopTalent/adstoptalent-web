import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
import Routing from './Routing';

ReactDOM.render(<Routing />
, document.getElementById('root'));
registerServiceWorker();
