import './App.css';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Contact from './components/Contact';




function App() {
  
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



export default App;



