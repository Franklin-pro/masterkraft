import React from "react";
import qt from "../assets/Screenfour.png";
import Footer from "./footer";
import NavBar from "./navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const About=()=>{
    const [team, setTeam]= useState([])

    useEffect(()=>{
      const fetchProduct = async ()=>{
         const response = await axios.get(`https://masterkraft-bn.onrender.com/API/team/get`)
         setTeam(response.data)
      };
      fetchProduct([])
    },[])
    
    return(<>
    <NavBar/>
    <div className="about-container">
        <div className="about-all-content">
            <div className="about-content">
                <div className="about-content-right">
                    <h1>ABOUT US.</h1>
                    <p>In today's digital era, where screens often dominate
                       the attention of our children, MasterKraft offers a
                       refreshing departure from idle entertainment, serving
                       as a sanctuary for meaningful, productive activities.
                       Each MasterKraft box takes us on a journey of
                       exploration and creativity, equipping our children with
                       the necessary tools to craft, create, and broaden their
                       horizons. This experience not only nurtures their
                       cognitive and motor skills but also ignites their
                       curiosity, fostering a spirit of innovation.
                       <br></br>
                       <br></br>
                       More than just a box, MasterKraft represents an
                       enriching experience and a profound connection. It
                       becomes an opportunity for parents and children to
                       bond through the joy of creation, dream together, and
                       inspire one another. </p>
                </div>
            </div>
            <div className="about-qoute">
                <div className="qoute-p">
                <p><i class="fa-solid fa-quote-left"></i>our work does make sense only if it is faithful witnessof his time
                <i class="fa-solid fa-quote-right"></i></p>
                </div>
               <div className="qoute-img">
               <img src={qt} alt="" />
               </div>
            </div>
         
            <div className="ourTeam">
           
            <div className="head">
                    <h1>OUR TEARM</h1>
                    </div>
                <div className="ourTeam-div-container">
                   
                 {team && team.datas && team.datas.map((row)=>(
                    <div className="ourTeam-container">
                    <div className="ourTeam-card">
                        <div className="ourTeam-img">
                        <img src={row.teamImage.url} alt="" />
                        </div>
                        <h3>{row.personName}</h3>
                        <p>{row.personWork}</p>
                    </div>

                </div>
                 ))}

                   
                </div>
            </div>
          
        </div>
    </div>
    <Footer/>
    </>)
}

export default About