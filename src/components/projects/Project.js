import React from 'react'
import "./project.css";
import Receipe from "./Receipe.png";
import Food from "./Food.png";
import Portfolio from "./javascript-porfolio.png";

const project = () => {
  return (
    <section className='projects' id="projects">
        <p>My Recent Work</p>
        <h4>Portfolio</h4>
        <div className='article-card'>
            <div className='card'>
                <div className='port'>
                    <img src={Receipe} alt="" />
                 </div>
                 <h4>A Receipe portfolio</h4>
                 <div className='btns-github'>
                     <a className='link1 git' href="https://github.com/subodh670/subodhmain">Github</a>
                     <a className='link1 demo' href="https://subodh670.github.io/subodhmain/">View</a>
                 </div>
            </div>
            <div className='card'>
                <div className='port'>
                    <img src={Food} alt="" />
                 </div>
                 <h4>A cooking website</h4>
                 <div className='btns-github'>
                     <a className='link1 git' href="https://github.com/subodh670/BhushanDahal-sec">Github</a>
                     <a className='link1 demo' href="https://subodh670.github.io/BhushanDahal-sec/">View</a>
                 </div>
            </div>
            <div className='card'>
                <div className='port'>
                    <img src={Portfolio} alt="" />
                 </div>
                 <h4>A Javascript portfolio</h4>
                 <div className='btns-github'>
                     <a className='link1 git' href="https://github.com/subodh670/portfolio_subodh/tree/master">Github</a>
                     <a className='link1 demo' href="https://subodh670.github.io/portfolio_subodh/">View</a>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default project
