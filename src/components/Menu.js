import React from 'react'
import "./menu.css";
import { useState, useRef, useEffect } from 'react';
import {AiFillHome} from "react-icons/ai";
const data = [
    {link: "about", href:"#about"},{link: "skills",href:"#skills"},{link: "projects",href:"#projects"},{link:"Contact",href:"#contact"},
]
const Menu = () => {
    const [list, setList] = useState([]);
    const [height, setHeight] = useState();
    const handleRef = useRef(null);
    useEffect(()=>{
    
    },[])

    const handleMenu = () =>{
        if(list.length>1){
            setList([]);
            handleRef.current.style.width= "5%";
        }
        else{
            setList(data);
            handleRef.current.style.width= "25%";
        }
    }
  return (
    <section className='menu'>
        <div ref={handleRef} className='container-menu'>
        
            {
list.map((item)=>{
    return(
        
        <a  className='menu_link' href={item.href}>{item.link}</a> 
    );   
})}<a className="menu_link home-but" onClick={handleMenu}>{<AiFillHome/>}</a>
            
        </div>
      
    </section>
  )
}

export default Menu
