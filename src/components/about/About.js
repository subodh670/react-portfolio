import React from 'react'
import tallPhoto from "./tall-photo.jpeg";
import '../../index.css';
const About = ({menu}) => {
  return (
    <section className='about-me' id="about">
        <p>Get to know</p>
        <h1>About Me</h1>
      <div className='flex-about-me'>
          <div className='tall-image'>
              <img className='suit-tall' src={tallPhoto} alt="tall-image" />
          </div>
          <div className='blocks-exp'>
            <div className='block'>
            <h5>Experience</h5>
            <p>One year of self Learning</p>
            </div>
            <div className='block'>
            <h5>Skills</h5>
            <p>HTML/CSS and React JS</p>
            </div>
            <div className='block'>
                <h5>Projects</h5>
                <p>4 Main projects</p>
            </div>
            <p className='info-about-me'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, iste illo? Quae, incidunt suscipit. Voluptatum aut maxime quod itaque sint placeat cumque fugit, sed quo dolorem vitae praesentium quos ex consequatur, repellat repellendus, corporis mollitia doloremque eum officia et dicta! Sequi sunt sint esse maiores fugiat nam nesciunt reprehenderit quaerat!</p>
          </div>
      </div>
      <div className='btn-talk'>
          <a href="#">Let's Talk...</a>
      </div>
    {menu}
    </section>
  )
}

export default About;
