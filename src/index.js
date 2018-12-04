import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link ,withRouter } from "react-router-dom";
import verify from './verify';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
