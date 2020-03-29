// src/Contact.js
 
import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';
 
function Contact(props) {
  return (
    <div class="footer-section">
        <img class ="center" width="100" height="100" src = {require('./tejasLogo/logo_transparent.png')}></img>
        <p >Email: <a href="mailto:someone@example.com">manjunathtej4s@gmail.com</a>.
        </p>
    </div>
  )
}
 
export default Contact;