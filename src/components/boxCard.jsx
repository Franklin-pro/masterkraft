import React from "react";
import 'react-html5video/dist/styles.css'

import OrderUser from "./orderinguser";
import { useState } from "react";
import { Modal } from "antd";


function TheBoxCard(props){
    const [IsOpen, setIsOpen] = useState(false);

    const handleOpen = ()=>{
        setIsOpen(true)
    }
    const handleClose = () =>{
        setIsOpen(false)
    }
return (
    
    <>
                    <Modal open={IsOpen} onCancel={handleClose} footer = {null}>
  {
    setIsOpen && (
                <OrderUser/>
            )

  }

  </Modal>
    <div className="container">
    <div className="video-container">
    <div className="delay">
        <div className="videos">
        <div className="video-card">
   <div className="image">
   <img src={props.photo.url} alt="pt"/>
    </div>
    <div className="video-content">
<h1>{props.proff}</h1>
<p>{props.course}</p>
<button to={props.youtube} className="youtube" target="blank" onClick={handleOpen}>order now</button>
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