import React from 'react';
import aim from '../assets/wek.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import {Modal} from 'antd';
import Login from './login';




function NavBar(){
    const[isMobile,setIsMobile]= useState(false);

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
                <Login/>
            )

  }

  </Modal>


        <nav>
        <div className='nav-container'>
            <div className='navbar'>
                <div className='logo'>
                    <img src={aim} alt='kraft'/>
                </div>

                <ul className={isMobile?'openNav':'navlink'}
                    onClick={()=>setIsMobile(false)}>
                    <li>
                        <a href='@' className='link'>Home</a>
                    </li>
                    <li>
                        <a href='./toturial' className='link'>Learn</a>
                    </li>
                    <li>
                        <a href='./tools' className='link'>The Box</a>
                    </li>
                    <li>
                        <a href='@' className='link'>about us</a>
                    </li>
                    <li>
                        <a href='@' className='link'>contact us</a>
                    </li>
                    <li>
                    <a href='./signup' className='link btn in'>sign-up</a>
                    </li>
                    <li>
                        <button className='link btn up' onClick={handleOpen}>log in</button>
                    </li>
                </ul>
                <MenuIcon className="menu" onClick = {()=>setIsMobile(!isMobile)} />
            </div>
            </div>
        </nav>
           
        </>
    )
}
export default NavBar