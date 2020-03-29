import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';

 
function About(props) {
  return (
    <div class="about-section">
      <h1>About Me</h1>
      <div class="roundedImage"></div>
        <p>
          Nice to meet you! I'm Tejas, a recent graduate from UCSC majoring in CS. This summer I will be joining Microsoft as a Software Engineer in Redmond,Washington. 
          I built this website from scratch, to put my web development skills to the test. 
          Let me know what you think! In addition to my website  I have a couple other personal/school projects that I've worked on. Feel free to check those out below.
           <br></br>
           <br></br>
           When I'm not coding I like to run, workout at the gym, and play a lot of Super Smash Bros. I'd also like to think I'm a Cinephile, so let me know if you need a recommendation!
        </p>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


      <a href="https://drive.google.com/file/d/1e8J5Kx8LNNO-z37LY6U3iTUckY3LTuV5/view?usp=sharing">
          <button type="button" class="btn btn-light">Résumé</button>
      </a>
      <a href="https://github.com/ManjunathTejas">
          <button type="button" class="btn btn-dark">GitHub</button>
      </a>
      <a href="https://www.linkedin.com/in/tejas-manjunath-18a442156/">
          <button type="button" class="btn btn-primary">LinkedIn</button>
      </a>
    </div>
  )
}
 
export default About;