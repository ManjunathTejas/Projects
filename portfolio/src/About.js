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
        
        <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8434eb1a-6a37-4fb0-b420-b39bf6bf2f7f/Tejas_Manjunath_SWE_Resume.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45ECQWES5D%2F20200327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200327T225551Z&X-Amz-Expires=86400&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXtyDLuJ%2BhTadSeLap0I7QAIAk0v%2BLGsQYZZCklHtoHgIgCTgV4PPY3RPut5O200byiOL2X5pfyHuFxUl8omD4XzoqvQMIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyNzQ1NjcxNDkzNzAiDNMuynpGyXSEbFVx%2BSqRA1E6OTquZ%2B7OCLemMLD7ZU7fb1zJRjHl0j2dInsDpKSX1xIVvJtVTLppNeO4tP%2Bjmsk9MzKmZdMppihHZXdwyBTI6l5Slr5oJajPOwwNJCRjXZADZV0gQ%2BP0zKMvO92XU%2B9XrKY8YmcjF2uXGBxbpEA9aCU3MsIcdolLYeYpawWMWUtvd7LL2L2Km0ZvRJKSJT7PvltRpekL44QGPYnp%2BczTjVi0FwceHuotxQ5pPh%2BRAikeIzdChMl181bCVhux0iP%2BtXja4nxSHeKtsltGEIgFUgTPeFMxmZQdA7uraPaxjyvPYXDqOMD9khe0ueqktv4IJlc%2FF%2BgtarBKc2VOh51k3ARzXnl2qmL5MOsXNih3WN32gvi3M0uygqEixj8y8dF%2FstfKDwbMHQ2TNSn%2F1em3%2FHkw3pX2EATW0bc000w1uxRAPqNy0Q7V%2BSPz3SkqfSM9%2BJ46cGx1KHUTMZWKVdai8K7pvYweiyi5Vq8G6l1SPOFo%2FZWcreEAlBWYOufGp6oikM3gT0pQMqBkdkVdKCGTMICC%2BfMFOusBgPQNEE6AvjOFrwGiKZzHhgmJ%2FiwmzO72tlnH7VvqNBG7%2FBDlqO5%2BdUjXjQXUKhFeh0A0a%2BHTWX23%2BuHvlHM6k99lFk7R%2FShN%2FIzBfMemn2EXZ9F7VOZ1Te2KAFV%2Bdrr0lgbBaOu64apijOVS18Hlp1dlvxYrDaGpqRMZRAAI4p2ccsa07YFnJJnDmlFnYyLDQkH6B696%2BaG5ApA%2B1j77ldIhbxGn0m%2FWMa44mhvkYPZ70%2BoUReoEyQ4i8%2BEOApFmNWySxESbp3CLWCh%2FrHf%2BcuY%2FZvwTZxFIulMY1oBSaZlZxMWYXyrMBhm7CQ%3D%3D&X-Amz-Signature=bbbfe4d13873106fba26bee8438fd62ac139c7f2571995c187e377f6b416aac7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Tejas%2520Manjunath%2520SWE%2520Resume.pdf%22">
          <button type="button" class="btn btn-primary">Résumé</button>
        </a>
    </div>
  )
}
 
export default About;