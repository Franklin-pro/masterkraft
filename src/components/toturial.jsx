import React, { useRef } from "react";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Link } from 'react-router-dom';

function Tutorial(props) {
    const videoRef = useRef(null);

    const handlePlay = () => {
        if (videoRef.current && videoRef.current.video) {
            videoRef.current.video.play();
        }
    };

    const handlePause = () => {
        if (videoRef.current && videoRef.current.video) {
            videoRef.current.video.pause();
        }
    };

    return (
        <div className="video-container">
            <div className="delay">
                <div className="videos">
                    <div className="video-card">
                        <div className="video" onMouseEnter={handlePlay} onMouseLeave={handlePause}>
                            <Video loop controls={[]} ref={videoRef}>
                                <source src={props.video} type="video/mp4" />
                            </Video>
                        </div>
                        <div className="video-content">
                            <h1>{props.proff}</h1>
                            <p>{props.course}</p>
                            <Link to={props.youtube} className="youtube" target="_blank">Go to watch on YouTube</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tutorial;
