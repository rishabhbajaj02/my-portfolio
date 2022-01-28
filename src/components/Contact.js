import React from 'react';
import './contact-style.css'
import { AiFillGithub, AiFillLinkedin, AiFillMail,  } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
    <div class="contact-box">
      <div class="contact-links">
        <h2>CONTACT</h2>
        <div class="links">
          <div class="link">
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/bajajrishabh'><AiFillLinkedin className='hover:bg-white hover:text-blue-800' size={70}/></a>
          </div>
          <div class="link">
            <a target='_blank' rel="noopener noreferrer" href='https://www.github.com/bajajris'><AiFillGithub  className='hover:bg-white hover:text-blue-800' size={70}/></a>
          </div>
          <div class="link">
            <a target='_blank' rel="noopener noreferrer" href='mailto:rishabh.bajaj740@gmail.com'><AiFillMail  className='hover:bg-white hover:text-blue-800' size={70}/></a>
          </div>
        </div>
      </div>
      <div class="contact-form-wrapper">
        <form>
          <div class="form-item">
            <input type="text" name="sender" required/>
            <label>Name:</label>
          </div>
          <div class="form-item">
            <input type="text" name="email" required/>
            <label>Email:</label>
          </div>
          <div class="form-item">
            <textarea class="" name="message" required></textarea>
            <label>Message:</label>
          </div>
          <button class="submit-btn">Send</button>  
        </form>
      </div>
    </div>
  </section>
  );
  };

export default Contact;
