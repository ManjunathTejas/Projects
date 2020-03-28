import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import About from './About.js';         //Import the About component
import './App.css';
import Navbar from './Navbar.js';
import SplashImage from './SplashImage.js';
import Contact from "./Contact.js";
 
function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <Navbar/>
      <SplashImage/>
      <a name="about"></a>
      <About/>
      <a name="projects"></a>
      <br></br>
      <br></br>
      <br></br>
      <h1>Projects</h1>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">

          <div className="col-md-4">
            <Thumbnail
              link="Amnis"
              image={require("./images/amnis.png")}
              title="Amnis: Livestream Lecture"
              category="Website"
            />
          </div>

          <div className="col-md-4">
            <Thumbnail
              link="/airbnb"
              image=""
              title="More Projects will be uploaded"
              category=""
            />
          </div>

          <div className="col-md-4">
          <Thumbnail
              link="/airbnb"
              image=""
              title="More Projects will be uploaded"
              category=""
            />
          </div>

        </div>
      </div>
      <a name="contact"></a>
      <Contact/>
    </div>
  )
}
 
export default Projects;
