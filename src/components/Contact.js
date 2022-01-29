import React from 'react';
import './contact-style.css'
import { AiFillGithub, AiFillLinkedin, AiFillMail,  } from "react-icons/ai";
const { REACT_APP_MAIL_SERVICE_ID } = process.env;

const Contact = () => {



  const [bodyFormData, setBodyFormData] = React.useState({
    sender: '',
    email: '',
    message: ''
});

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setBodyFormData(prevState => ({ ...prevState, [name]: value }));
}

const handleSubmit = (event) =>{
  event.preventDefault();
	const templateId = process.env.REACT_APP_MAIL_TEMPLATE_ID;

  sendMessage(`${templateId}`, {message: bodyFormData.message, from_name: bodyFormData.sender, reply_to: bodyFormData.email})

}

const sendMessage =  (templateId, variables)=> {

  console.log(REACT_APP_MAIL_SERVICE_ID)
  console.log(process.env.NODE_ENV)

	window.emailjs.send(
  	`${process.env.REACT_APP_MAIL_SERVICE_ID}`, templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
      setBodyFormData({
        sender: '',
        email: '',
        message: ''
      })
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  return (
    <section id="contact">
    <div className="contact-box">
      <div className="contact-links">
        <h2>CONTACT</h2>
        <div className="links">
          <div className="link">
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/bajajrishabh'><AiFillLinkedin className='hover:bg-white hover:text-blue-800' size={70}/></a>
          </div>
          <div className="link">
            <a target='_blank' rel="noopener noreferrer" href='https://www.github.com/bajajris'><AiFillGithub  className='hover:bg-white hover:text-blue-800' size={70}/></a>
          </div>
          <div className="link">
            <a target='_blank' rel="noopener noreferrer" href='mailto:rishabh.bajaj740@gmail.com'><AiFillMail  className='hover:bg-white hover:text-blue-800' size={70}/></a>
          </div>
        </div>
      </div>
      <div className="contact-form-wrapper">
        <form>
          <div className="form-item">
            <input type="text" name="sender" onChange={(e)=>handleChange(e)} value={bodyFormData.sender} required/>
            <label>Name:</label>
          </div>
          <div className="form-item">
            <input type="text" name="email" onChange={(e)=>handleChange(e)} value={bodyFormData.email} required/>
            <label>Email:</label>
          </div>
          <div className="form-item">
            <textarea className="" name="message" onChange={(e)=>handleChange(e)} value={bodyFormData.message} required></textarea>
            <label>Message:</label>
          </div>
          <button className="submit-btn" onClick={(e)=>handleSubmit(e)}>Send</button>  
        </form>
      </div>
    </div>
  </section>
  );
  };

export default Contact;
