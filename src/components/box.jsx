import React from "react";
import NavBar from "./navbar";
import box from '../assets/box.json'
import TheBoxCard from "./boxCard";
import Footer from "./footer";
function TheBox(){
    return (
        <>
  <NavBar/>
        <div className="videos">
           {box? (box.map((learnx)=>(
         
            <TheBoxCard proff={learnx.name} course={learnx.description} photo = {learnx.newsImage}/> 

           

           
    ))):(
        <p>Loading...</p>
    )}
    </div>
    <Footer/>
        </>
    )
}
export default TheBox