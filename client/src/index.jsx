import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import css from '../style.css';
import $ from 'jquery';  
import Popper from 'popper.js';  
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';  

ReactDOM.render(
  <App />, document.getElementById('app')
)