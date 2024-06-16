import React from 'react';

import Navbar from './homePage-component/Navbar';
import Intro from './homePage-component/Intro';
import Education from './homePage-component/Education';
import Expertise from './homePage-component/Expertise';
import Contact from './homePage-component/Contact';



function HomePage(props) {
    return (
        <>
            <div className="Firstpage">
                <Navbar/>
            </div>
            <div className='section-content1'>
                <Intro/>
            </div>

            <div className='section-content3'>
                <Expertise/>
            </div>

            <div className='section-content2'>
                <Education/>
            </div>
            <div className='section-content5'>
                <Contact/>
            </div>
        </>
    );
}

export default HomePage;