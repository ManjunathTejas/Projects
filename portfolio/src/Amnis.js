import React from 'react'; // Import the Component component from React
import {Link, BrowserRouter, Route} from 'react-router-dom'; // Import the Link component
import './App.css';

function Amnis(props) {
    return (
<div>
<div class="card center w-75 h-25">
<img   width="50" height="50" src={require("./images/amnis.png")} alt="Card image top"></img>
  <div class="card-body">
    <h3 class="card-title">Amnis</h3>
    <h4 class="card-subtitle">Live lecture client built by students for students</h4>
    <p class="card-text">The program has 2 standout features. The first being a discussion/chat section where students can ask questions regarding the lecture no matter where they are. The chat runs on a Node.js server as well as a MongoDB database to store previous questions and chat messages. The second feature is live tags. Live tags are generated using Google’s speech to text and NLP API. From the professor’s live mic the audio is analyzed by the API to find keywords. Those words are then put through a database and sorted based on frequency. The words are then transcribed into a text file and displayed as buttons. These buttons can be clicked and it will take the student to a Wikipedia link with additional info about the tag.</p>
    <a href="https://github.com/ManjunathTejas/Amnis">
          <button type="button" class="btn btn-secondary">Code</button>
    </a>
  </div>
</div>
<img class ="center" width="500" height="400" src = {require("./images/amnisLogin.png")}></img>
<img class ="center" width="500" height="400" src = {require("./images/amnisDemo.png")}></img>
</div>  
    );
  }

  export default Amnis;