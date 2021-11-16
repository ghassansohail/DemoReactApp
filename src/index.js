import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";


// ReactDOM.render(
//   React.createElement('h1',{style:{color:"Green"}},"Yo! My name is Shintzel")
//   ,document.getElementById('root')
// );

ReactDOM.render(
  <Router>
  <App/>
  </Router>
  ,document.getElementById('root')
);

