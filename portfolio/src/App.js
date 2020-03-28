// App.jsx
 
import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
//import {Thumbnail} from "./Thumbnail.js" 
import Projects from './Projects.js'; 
import Contacts from './Contact.js'; 
import About from './About.js'; 
import Amnis from './Amnis.js';
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Route path="/Amnis" component={Amnis} />
        

      </div>
    </BrowserRouter>
  );
}
 
export default App;