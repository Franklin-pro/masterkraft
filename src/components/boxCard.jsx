import React from "react";
import 'react-html5video/dist/styles.css'
import {Link} from 'react-router-dom'



function TheBoxCard(props){
return (
    <>
    <div className="container">
    <div className="video-container">
    <div className="delay">
        <div className="videos">
        <div className="video-card">
   <div className="image">
   <img src={props.photo} alt="pt"/>
    </div>
    <div className="video-content">
<h1>{props.proff}</h1>
<p>{props.course}</p>
<Link to={props.youtube} className="youtube" target="blank">order now</Link>
        </div>
   </div>

        </div>
    </div>
  
    </div>
    </div>
   
   

    </>
)
}
export default TheBoxCard