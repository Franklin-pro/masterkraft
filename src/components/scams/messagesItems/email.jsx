import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";


function Email(){
    const [email,setEmail]= useState(null)

    useEffect(()=>{
const fetchMessage = async ()=>{
    try {
        const response = await axios.get('https://masterkraft-bn.onrender.com/API/contact/get')
        setEmail(response.data)
    } catch (error) {
        
    }
  
};
fetchMessage([])

    },[])
    console.log(email)

return (
    <>
        <div className="message-container">
            <div className="message-cont">
                <div className="messagex">
                {email ? (
                    email.datas.map((message, index) => (
                        <>
                        <h4>{index}</h4>
                         <h3>fullname:<span>{message.fullname}</span></h3>
                        <h3>email:<b>{message.email}</b></h3>
                        <h3>phone:<b>{message.phonenumber}</b></h3>
                        <h3>province:<b>{message.province}</b></h3>
                        <p>message: <b>{message.message}</b></p>
                        <h3>course:<b>{message.course}</b></h3>
                        <h3>schoolName:{message.schoolname}</h3>
                        </>
                       
                    ))
                ) : (
                    <p>Loading...</p>
                )}
             
                </div>
              
           
            </div>
        </div>
    </>
)
}
export default Email