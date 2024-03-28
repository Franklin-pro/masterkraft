import React, { useState, useEffect } from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import temp from '../assets/temp2.png'


function Display() {
    const [filteredMentors, setFilteredMentors] = useState([]);
    const [nextClicked, setNextClicked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://masterkraft-bn.onrender.com/API/didyou/get');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
    
                // Check if responseData is an object and contains an array property
                if (typeof responseData !== 'object' || !Array.isArray(responseData.data)) {
                    throw new Error('Invalid data format: expected object with "data" array property');
                }
    
                const filtered = responseData.data.filter(mentorItem => mentorItem.id === currentIndex + 1);
                setFilteredMentors(() => filtered); // Using functional update to avoid infinite loop
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error (e.g., show error message)
            }
        };
        fetchData();
    }, [currentIndex, filteredMentors]); 
    
    console.log(filteredMentors)

    const nextMentor = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setNextClicked(true);
    };

    return (
        <>
        
            <div className="read-container">
                <div className="dids">
                    {filteredMentors.length > 0 ? (
                        filteredMentors && filteredMentors.datas && filteredMentors.map((mentorItem) => (
            
                         <>
                           <div className="did" key={mentorItem.id}>
                                <div className="image-container">
                                    <div className="image">
                                        <img src={temp} alt="home" />
                                    </div>
                                   
                                </div>
                                <div className="description-container">
                                    <div className="head">
                                        <h1>{mentorItem.Title}</h1>
                                    </div>
                                    <div className="text">
                                        <p>{mentorItem.Description}</p>
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


