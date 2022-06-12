import React from 'react'
import "./contact.css";
import {HiOutlineMail} from "react-icons/hi";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
const Contact = () => {
  return (
    <section className='contact' id="contact">
      <p>Get in touch</p>
      <h4>Contact Me</h4>
      <div className='container'>
      <div className="box-contact">
        <div className='email-me'>
            <HiOutlineMail/>
            <h5>Email</h5>
            <p>subodhacharya21@gmail.com</p>
            <a href="">Send a message</a>

        </div>
        <div className='messenger'>
            <RiMessengerLine/>
            <h5>Messenger</h5>
            <p>subodhacharya21</p>
            <a href="">Send a message</a>
        </div>
        <div className='whatsapp'>
            <BsWhatsapp/>
            <h5>
              Whatsapp
            </h5>
            <p>9841240401</p>
            <a href="">Send a message</a>
        </div>
      </div>
      <div className="contact-dm">
          <form className='submit-form'>
          <div className='full-name'>
              <input type="text" className="full-first--name" placeholder='                                 Your Full Name'/>
          </div>
          <div className='email'>
          <input type="text" className="full-first--email" placeholder='                                 Your Email'/>
          </div>
          <div className='message'>
          <textarea type="textarea" rows="4" cols="50" className="full-first--message" placeholder='                Your Message'/>
          </div>
          <div className='button-submit'>
              <button type='submit' className='submit'>Send</button>
          </div>
          </form>
      </div>
      </div>
    </section>
  )
}

export default Contact
