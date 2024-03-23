import React from "react";
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css'
import {Link} from 'react-router-dom'



function Toturial(props){
return (
    <>
    <div className="video-container">
    <div className="delay">
        <div className="videos">
        <div className="video-card">
   <div className="video">
    <Video loop>
<source src={props.video} type="video/mp4" />
</Video>
    </div>
    <div className="video-content">
<h1>{props.proff}</h1>
<p>{props.course}</p>
<Link to={props.youtube} className="youtube" target="blank">go to watch on youtube</Link>
        </div>
   </div>

        </div>
    </div>
  
    </div>
   

    </>
)
}
export default Toturial