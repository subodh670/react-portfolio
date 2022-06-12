import React from 'react'
import "./footer.css";
import {FaFacebookSquare} from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs";
import {FaTwitterSquare} from "react-icons/fa"
import {BsFillArrowUpSquareFill} from "react-icons/bs";
const Footer = () => {
  return (
    <section className='footer'>
        <div className='info-foot'>
            <h1>Subodh</h1>
            <div className='social-icons'>
                <FaFacebookSquare className='fb'/>
                <BsLinkedin className='lk'/>
                <FaTwitterSquare className='tw'/>
            </div>
            <div className='up-scroll'>
                <a href="#home"><BsFillArrowUpSquareFill/></a>
            
            </div>
            <div className='reserve'>
                <p>Subodh All rights Reserved 2022</p>
            </div>
        </div>
    </section>
  )
}

export default Footer;
