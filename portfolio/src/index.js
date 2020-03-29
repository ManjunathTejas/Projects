import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>< App /></Router>,
  document.getElementById('root')
);
