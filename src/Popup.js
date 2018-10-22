import React, { Component } from 'react';
import { render } from "react-dom";
import "./index.css";
import Demo from "./examples/Demo.js";
import SimpleTooltip from "./examples/SimpleTooltip.js";
import SimpleMenu from "./examples/SimpleMenu.js";
import InputFocus from "./examples/InputFocus.js";
import ToolTipPosition from "./examples/ToolTipPositions";
import NestedToolTip from "./examples/NestedToolTip.js";

import './App.css';

class Popup extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Reactjs-popup Examples : </h1>
          <Demo />
        </div>
      </div>
    );
  }
}

export default Popup;
