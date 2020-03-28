// src/Contact.js
 
import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';
 
function Contact(props) {
  return (
    <div class="footer-section">
      <footer>
        <img class ="center" width="150" height="150" src = {require('./tejasLogo/logo_transparent.png')}></img>
        <p>Created by: Tejas Manjunath</p>
        <p>Contact information: <a href="mailto:someone@example.com">manjunathtej4s@gmail.com</a>.
        <br></br>
        Phone: 1(408)425-1550</p>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

<a href="https://www.linkedin.com/in/tejas-manjunath-18a442156/" class="fa fa-linkedin"></a>
<a href="https://github.com/ManjunathTejas" class="fa fa-github"></a>


      </footer>
    </div>
  )
}
 
export default Contact;