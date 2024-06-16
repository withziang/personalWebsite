import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className='center_black' id='contact'>      
        <div className='hline_black'></div>
      </div>

      <div className='top'>
        <div className='links'>
          <a href='https://www.linkedin.com/in/ziang-wang2021/' className='linkedin'>
            <i className="fa-brands fa-linkedin fa-2x"></i>
            <p className='emailword'>@ziang-wang2021</p>
          </a>
          <a href='https://www.instagram.com/avecziang/'  className='instagram'>
            <i className="fa-brands fa-instagram fa-2x"></i>
            <p className='emailword'>@avecziang</p>
          </a>
          <div className='email'>
            <i className="fa-regular fa-envelope fa-2x"></i>
            <p className='emailword'>zach0623@icloud.com</p>
          </div>
        </div>
        <div className='archive'>
          <a href='../../../asset/resume.pdf' download className='resume'>
            <i className="fa-solid fa-cloud-arrow-down fa-3x"></i>
            <p className='emailword'>download my resume as a pdf</p>
          </a>
        </div>
      </div>
      <p className='afterwords'> Website built in 2023, intented for personal use only. Inspriation comes from various websites. <br/>
        More website projects coming up.
        </p>
    </div>

  )
}

export default Contact;
