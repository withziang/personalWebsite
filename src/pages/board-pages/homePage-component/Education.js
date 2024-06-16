import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div>
      <div className='center' id='education'>
        <div className='hline'></div>
        <p className='title3'>Education</p>
        
        <div className='education_context'>
          <div className="vertical-line">
            <div className="dot"> 
              <div className="circle"></div>
              <a href= 'https://www.mcgill.ca/ece/undergrad/information/software-engineering-co-op' className='dot-text right' >
                <em>From 2023-2027</em> <br/>
                McGill University, Bachelor's Degree<br/>
                Co-op Software Engineering B.Eng
              </a>
            </div>
            <div className="dot">
            <a href= 'https://www.marianopolis.edu/' className='dot-text right' style={{filter: 'brightness(0.8)'}}>
                <em>From 2021-2023</em> <br/>
                Marianopolis College, pre-university DEC<br/>
                Honours Pure and Applied Science
            </a>
            </div>
            <div className="dot">
            <a href= 'https://www.prepinternational.com/' className='dot-text right' style={{filter: 'brightness(0.8)'}}>
                <em>From 2019-2021</em> <br/>
                College Prep International, <br/>
                Quebec HighSchool Diploma
            </a>
            </div>
            
            
          </div>
          
        </div> 
      </div>
    </div>
  )
}

export default Education
