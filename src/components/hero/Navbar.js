import React from 'react'
import '../../index.css';
import {GiHamburgerMenu} from "react-icons/gi";

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [flag, setFlag] = useState(true);
  const handleBurger = () =>{
    setFlag(!flag);
  }
  return (<>
  
    <nav id="home">
        <h1 className='icon'>Subodh</h1>
        <div className='nav-items'>
            <ul className='nav-ul show-item'>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>

                <li><a className='btn' href="#">Get Started</a></li>
            </ul>
            
        </div>
    </nav>
      <div className='hamburger' onClick={handleBurger}>
            {<GiHamburgerMenu/>} 
              </div> 
    </>
  )
}

export default Navbar;
