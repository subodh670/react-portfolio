import React, { useEffect } from "react";
import {useState} from "react";
import heroimg from "../../../src/hero.jpg";
import suitphoto from "../../suitphoto.jpeg";
import '../../index.css';
const Hero = (props) => {
  const [value, setValue] = useState(false);
  const handleMouse = () =>{
    setValue(true);
  }
  const handleMouse2 = () =>{
    setValue(false);
  }
  return (
    <section className="main">
      {props.children}

      <div className="hero-content">
        <div className="content--1">
          <h1>
            Hi, my name
            <span className="extra-break"> is Subodh </span>
          </h1>
          <p>I love making beautiful react websites</p>

          <div className="links">
            <a href="#" className="link">
              Download CV
            </a>
            <a href="#" className="link">
              Let's talk
            </a>
          </div>
        </div>
        <div className="content--2">
        <div onMouseOver={handleMouse} onMouseOut={handleMouse2} className="image-cover">
            <img className="img-personal" src={suitphoto} alt="suit" />
          <p className={value?"para1":"para"}>A React web developer......</p>
        </div>
        </div>
      </div>

      <div className="bck-image">
        <img className="image-src" src={heroimg} alt="suit" />
      </div>
    </section>
  );
};

export default Hero;
