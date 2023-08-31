import React, {useState, useEffect} from 'react';
import './Expertise.css';

const Expertise = () => {

 //main switch between photography and programming
  const [isLeftButtonActive, setIsLeftButtonActive] = useState(true);
  const [isRightButtonActive, setIsRightButtonActive] = useState(false);

  const handleShiftLeftClick = () => {     //when left shift, left button is active
    if (!isLeftButtonActive){
      setIsLeftButtonActive(!isLeftButtonActive);
      setIsRightButtonActive(false);}
   
  };

  const handleShiftRightClick = () => {
    if(!isRightButtonActive){
      setIsRightButtonActive(!isRightButtonActive);
      setIsLeftButtonActive(false);}
    
  };
 //photography carousel swiping 
  const [sliderIndex,setSliderIndex] = useState(0);
  const minSwipeDistance = 50;
  const [touchstart, setTouchStart] = useState(null);  //two positions int
  const [touchend,setTouchEnd] = useState(null);
  const [distanceMoved, setDistanceMoved] = useState(0);
  const [swipingDistance, setSwipingDistance] = useState(800);


    //setSwipingDistance 
    useEffect(()=>{
      const updateSlideWidth = () =>{
        var screenWidth = window.innerWidth;
        if(screenWidth < 600){
          setSwipingDistance(300);
        } else if (screenWidth < 900){
          setSwipingDistance(500);
        } else{
          setSwipingDistance(800);
        };
      };

      updateSlideWidth();

      window.addEventListener('resize',updateSlideWidth);

      return () =>{
        window.removeEventListener('resize',updateSlideWidth);
      };
    },[]);



    //main code
  const whenTouchStart = (e) =>{
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const whenTouchMove = (e) =>{
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const whenTouchEnd = () => {
    if(touchend && touchstart){
      var distance = touchstart - touchend;
      var isLeftSwipe = distance > minSwipeDistance;
      var isRightSwipe = distance < -minSwipeDistance;
      if(isLeftSwipe && sliderIndex < 4){
        setSliderIndex((x) => x +1  ) ;     //swiping the left means go right
        setDistanceMoved(swipingDistance*(sliderIndex + 1));
      };
      if(isRightSwipe && sliderIndex > 0){
        setSliderIndex((x) => x -1) ;
        setDistanceMoved(swipingDistance*(sliderIndex -1 ));
      };
    };
  };
  //photography carousel clicking 
  const clickleft = () =>{
    if(sliderIndex > 0){
      setSliderIndex((x) => x -1) ;
      setDistanceMoved(swipingDistance*(sliderIndex-1));
    };
  }
  const clickright = () =>{
    if(sliderIndex < 4){
      setSliderIndex((x) => x +1  ) ;     //swiping the left means go right
      setDistanceMoved(swipingDistance*(sliderIndex + 1));
    };
  }

  return (
    <div>
      <div className='center' id='expertise'>
      <div className='hline'></div>
        <div className='title2'>Expertise</div>
        <div className='buttons'>
          <button className={`shift-button-left ${isLeftButtonActive ? 'shift-left-active' : ''}`} id="shift-left" onClick={handleShiftLeftClick}>
              As a programmer
          </button>
          <button className={`shift-button-right ${isRightButtonActive ? 'shift-right-active' : ''}`} id="shift-right" onClick={handleShiftRightClick}>
              As a photographer
          </button>
        </div>
      </div>
      <div className='hide'>
        <div className={`container ${isRightButtonActive ? 'shift-right-active' : ''}`}>
          <div className="page-content">
                <div className='programming'>
                  <div className='grid'>
                    <div className='the_first'>
                      <p className='first_word'>
                      <div className='web'> Web Building<br/> </div>
                      <em>This website is completely coded in JS.React</em></p>
                      <div className='programming_image'></div>
                    </div>
                    <div className='the_second'>
                      <div className='second_word'>Python </div>
                    </div>
                    <div className='the_third'>
                      <div className='third_word'>
                      <em>Adept at <br/></em>Topology</div>
                      <div className='topology_image'></div>
                    </div>
                    <div className='the_forth'>
                      <div className='forth_word'>
                        Solid <br/> <em>Academic Background</em>
                      </div>
                      <div className='second_forth_word'>
                        Proficient<br/> <em> in three languages</em>
                      </div>
                      <div className='third_forth_word'>
                        Skilled<br/><em> in LATEX</em>
                      </div>
                      </div>
                    <div className='the_fifth'>
                      <div className='fifth_word'>
                      c++
                      </div>
                    </div>
                  </div>
                </div>
                <div className='photography'>
                  <div className='slider' onTouchStart={whenTouchStart} onTouchMove={whenTouchMove} onTouchEnd={whenTouchEnd}>
                    <div className='buttons2'>
                      <div><i className={`fa-solid fa-chevron-left ${(sliderIndex == 0) ? 'leftest_slide' : ''}`} onClick={clickleft}></i></div>
                      <div><i className={`fa-solid fa-chevron-right ${(sliderIndex == 4) ? 'leftest_slide' : ''}`} onClick={clickright}></i></div>  {/*got lazy, both leftest_slide */}
                    </div>
                    <div className='carousel'>
                      <div className='slides' style={{ transform: `translateX(-${distanceMoved}px)` }}>
                        <div className='carousel_1'>
                          <div className='pic1'></div>
                        </div>
                        <div className='carousel_1'>
                          <div className='pic2'></div>
                        </div>
                        <div className='carousel_1'>
                          <div className='pic3'></div>
                        </div>
                        <div className='carousel_1'>
                          <div className='pic4'></div>
                        </div>
                        <div className='carousel_1'>
                         <div className='pic5'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='fivedots'>
                    <div className={`dot1 ${(sliderIndex == 0) ? 'dotactivate' : ''}`}></div>
                    <div className={`dot2 ${(sliderIndex == 1) ? 'dotactivate' : ''}`}></div>
                    <div className={`dot3 ${(sliderIndex == 2) ? 'dotactivate' : ''}`}></div>
                    <div className={`dot4 ${(sliderIndex == 3) ? 'dotactivate' : ''}`}></div>
                    <div className={`dot5 ${(sliderIndex == 4) ? 'dotactivate' : ''}`}></div>
                  </div>
                  <a href= 'https://www.instagram.com/avecziang/' className='buttonInsta' ><i className="fa-brands fa-instagram"> </i>  See my full portfolio on Instagram!</a>
                  <div className='carousel_word'>Experienced in landscape, motosport, wildlife, gala, concert and all genres of event photography.  <br/>Feel free to contact me for further bussiness inquiry.</div>
                </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Expertise;
