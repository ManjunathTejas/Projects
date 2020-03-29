import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';

function SplashImage(){
    return(
        <header class="masthead">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12 text-center">
                    <p class="masthead-intro">Hi I'm</p>
                    <h1 class="masthead-heading">Tejas!</h1>
                </div>
            </div>
        </div>
    </header>
    );
}

export default SplashImage;

 /*<header class="masthead">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 text-center">
                        <p class="masthead-intro">Hi I'm</p>
                        <h1 class="masthead-heading">Tejas!</h1>
                    </div>
                </div>
            </div>
        </header>*/