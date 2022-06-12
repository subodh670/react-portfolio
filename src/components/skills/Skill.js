import React from 'react'
import "./skills.css";

const Skill = () => {
  return (
    <section className='skill-comp' id="skills">
      <p>What skills i have</p>
      <h1>My experience</h1>
      <div className='skills-exp'>
        <article className='block-skill'>
            <h4>Front end development</h4>
        <div className='lang-mine'>
            <div className='lang'>
            <h5>HTML</h5>
            <p>intermediate</p>
            </div>
            <div className='lang'>
            <h5>CSS</h5>
            <p>intermediate</p>
            </div>
            <div className='lang'>
            <h5>Javascript</h5>
            <p>intermediate</p>
            </div>
            <div className='lang'>
            <h5>Tailwind CSS</h5>
            <p>Basic</p>
            </div>
            <div className='lang'>
            <h5>React JS</h5>
            <p>intermediate</p>
            </div>
            
        </div>
        
        </article>
        <article className='block-skill'>
        <h4>Other Programming Languages</h4>
        <div className='lang-mine'>
            <div className='lang'>
            <h5>Python</h5>
            <p>intermediate</p>
            </div>
            <div className='lang'>
            <h5>Java</h5>
            <p>Basic</p>
            </div>
            <div className='lang'>
            <h5>C/C++</h5>
            <p>Basic</p>
            </div>
            
        </div>
        

        </article>
      </div>
    </section>
  )
}

export default Skill
