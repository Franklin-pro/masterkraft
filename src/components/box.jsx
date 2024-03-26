import React from "react";
import NavBar from "./navbar";
import TheBoxCard from "./boxCard";
import Footer from "./footer";
import axios from "axios";
import { useState,useEffect } from "react";
function TheBox(){
    const [product,setProduct]= useState(null)

    useEffect(()=>{
        const fetchData = async () =>{
          try {
            const response = await axios.get('https://masterkraft-bn.onrender.com/API/product/get')
            setProduct(response.data)
          } catch (error) {
            console.log('error',error)
          }
        };
        fetchData([])
      },[])

    return (
        <>
  
  <NavBar/>
        <div className="videos">
           {product? (product.datas.map((learnx)=>(
         
            <TheBoxCard proff={learnx.productName} course={learnx.productPrice} photo = {learnx.productImage}/> 

           

           
    ))):(
        <p>Loading...</p>
    )}
    </div>
    <Footer/>
        </>
    )
}
export default TheBox