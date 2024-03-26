import React from "react";
import { DefaultPlayer as Video } from 'react-html5video'; // Import the Video component
import 'react-html5video/dist/styles.css';
import { Link } from 'react-router-dom'; // Import the Link component

function Tutorial(props) {
    let videoFilename = '';
    let isValidVideo = false;

    if (props.video) {
        // Check if props.video is a valid URL
        if (/^(http|https):\/\//.test(props.video)) {
            try {
                const videoUrl = new URL(props.video);
                videoFilename = videoUrl.pathname.split("/").slice(-1)[0];
                isValidVideo = true;
            } catch (error) {
                console.error('Invalid URL:', props.video);
            }
        } else {
            videoFilename = props.video;
            isValidVideo = true;
        }
    }

    return (
        <div className="video-container">
            <div className="delay">
                <div className="videos">
                    <div className="video-card">
                        {isValidVideo && (
                            <div className="video">
                                <Video loop>
                                    <source src={"http://localhost:3030/videos/" + videoFilename} type="video/mp4" />
                                </Video>
                            </div>
                        )}
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
