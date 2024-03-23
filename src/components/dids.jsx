import React, { useState, useEffect } from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import temp from '../assets/temp2.png'
import mentor from '../assets/knows.json';

function Display() {
    const [filteredMentors, setFilteredMentors] = useState([]);
    const [nextClicked, setNextClicked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const filtered = mentor.filter(mentorItem => mentorItem.id === currentIndex + 1);
        setFilteredMentors(filtered);
    }, [currentIndex]);

    const nextMentor = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setNextClicked(true);
    };

    return (
        <>
        
            <div className="read-container">
                <div className="dids">
                    {filteredMentors.length > 0 ? (
                        filteredMentors.map((mentorItem) => (
                          
                         <>
                           <div className="did" key={mentorItem.id}>
                                <div className="image-container">
                                    <div className="image">
                                        <img src={temp} alt="home" />
                                    </div>
                                   
                                </div>
                                <div className="description-container">
                                    <div className="head">
                                        <h1>{mentorItem.name}</h1>
                                    </div>
                                    <div className="text">
                                        <p>{mentorItem.description}</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="icon-footer">
                                 <SkipPreviousIcon className={`icon next ${nextClicked ? 'black' : 'green'}`} onClick={() => setCurrentIndex(prevIndex => prevIndex - 1)}/>
                                     <SkipNextIcon className="icon pre" onClick={nextMentor}/>
                                 </div>
                         </>
                        ))
                    ) : (
                        <p>all you was read if you want to read agani you may refresh page.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Display;


