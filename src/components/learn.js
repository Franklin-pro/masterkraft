
import Toturial from "./toturial"; // Typo? Should it be "Tutorial"?
import learn from '../assets/learn.json';
import logan from '../assets/logan.mp4';

import NavBar from "./navbar";
import Footer from "./footer";
import Dids from "./dids";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Learn() {
  
    useEffect(()=>{
        AOS.init({duration:1000})
      })
    return (
        <>
            <NavBar />
            <div className="videos" data-oas='zoom-in'>
                {learn ? (
                    learn.map((learnx, index) => (
                        <Toturial key={index} proff={learnx.name} course={learnx.description} video={logan} youtube={learnx.youtube} data-oas='zoom-in'/>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
<Dids/>
           
            <Footer />
        </>
    );
}

export default Learn;

