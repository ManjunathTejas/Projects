import React from 'react';
import {Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav class="navbar fixed-top navbar-expand-sm bg-dark navbar-dark">
<a routerLink="/" class="navbar-brand" href="#">
<div class="roundedLogo"></div>
</a>
<ul class="navbar-nav ml-auto">
<li class="nav-item">
    <a class="nav-link" href="#about">About</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="#projects">Projects</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="#contact">Contact</a>
</li>
</ul>
</nav>
    )
}

export default Navbar;