import React from 'react'; // Import the Component component from React
import {Link, BrowserRouter, Route} from 'react-router-dom'; // Import the Link component
import './cardStyle.css';


function Thumbnail(props) {
  return (
    <Link to={props.link}> 
      <div className="card text-center">
          <img src={props.image} alt="" className='card-img-top' height= "300" width="300"/>
        <div className='card-body text-dark'>
          <h4 className='card-title'>{props.title}</h4>
          <p className='card-text text-secondary'>
            {props.category}
          </p>
        </div>
      </div>
      </Link>
  );
}
 
export default Thumbnail;
