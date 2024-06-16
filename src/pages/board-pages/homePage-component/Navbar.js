import React, { useEffect, useState } from 'react';
import './Navbar.css';



function Navbar() {
  const [globalScaling, setGlobalScaling] = useState(1);
  const [scrollingDis,setScrollingDis] = useState(0);
  const [distance,setDistance] =useState(800);


  useEffect(()=>{
    const updateSlideWidth2 = () =>{
      var screenWidth = window.innerWidth;
      if(screenWidth < 700){
        setDistance(300);
      } else{
        setDistance(500);
      };
    };

    updateSlideWidth2();

    window.addEventListener('resize',updateSlideWidth2);

    return () =>{
      window.removeEventListener('resize',updateSlideWidth2);
    };
  },[]);



  useEffect(() => {
    const scalingFunction = () => {
      const scrolled = window.scrollY;
      const newScaling = Math.max(1, Math.min(800, scrolled*0.1  ));  //lowest is 1 highest is 10
      setGlobalScaling(newScaling);
      setScrollingDis(scrolled);
    };

    window.addEventListener('scroll', scalingFunction);

    return () => {
      window.removeEventListener('scroll', scalingFunction);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className="logo">
            <a className="fa-solid fa-bars"></a>
            <ul>
              <a href="#intro">About me</a>
              <a href="#expertise">Expertise</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </ul>
        </div>          
        <div className= "title">Ziang Wang Resume</div>
      </nav>
      <div className={`word1 ${(scrollingDis > distance) ? 'vanish' : ''}`}>
        <div className='blah'  style={{ transform: `scale(${globalScaling})` }}>
          <div className='slogan'>Welcome to my website!</div>
        </div>
      </div>
      <div style={{color: 'transparent'}}>
          <a href= '#contact' className='button' >contact me</a>
      </div>

    </>
  )
}

export default Navbar
