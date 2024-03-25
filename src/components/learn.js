
import Toturial from "./toturial"; // Typo? Should it be "Tutorial"?


import NavBar from "./navbar";
import Footer from "./footer";
import Dids from "./dids";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import axios from "axios";


function Learn() {

    const [video,setVideo]= useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
          try {
            const response = await axios.get('http://localhost:3030/API/video/get')
            setVideo(response.data)
          } catch (error) {
            console.log('error',error)
          }
        };
        fetchData([])
      },[])
  console.log(video)
    useEffect(()=>{
        AOS.init({duration:1000})
      })
    return (
        <>
            <NavBar />
            <div className="videos" data-oas='zoom-in'>
                {video ? (
                    video.datas.map((learnx, index) => (
                        <Toturial key={index} proff={learnx.videoTitle} course={learnx.videoDescription} video={learnx.video} youtube={learnx.youtubeLink} data-oas='zoom-in'/>
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

