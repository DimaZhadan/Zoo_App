import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
// import Pagination from './pagination/Pagination';

import sliderData from '../../services/sliderData.json';

import mainButtonLogo from '../../resources/img/main_btn_logo.svg';
import dollar from '../../resources/img/dollar.svg';

import './slider.scss';

const Slider = () => {
   const data = sliderData.data;
   const ref = useRef(null)
   const [position, setPosition] = useState(0);
   const [swipeInfo, setSwipeInfo] = useState(false);
   const [transitionX, setTransitionX] = useState(0);


   const onMouseDown = useCallback(e => {
      e.preventDefault()
      if (swipeInfo) return;
      setPosition(e.clientX);
      setSwipeInfo(true);
      ref.current.style.transition = undefined;
      ref.current.style.transform = undefined;
   }, [swipeInfo])

   const onMouseUp = useCallback(e => {
      const slideCount = document.querySelectorAll('.preview__slider-item');
      const lastElement = document.getElementById(`0${slideCount.length}`);
      const firstElement = document.getElementById(`01`);
      const currentPosition = e.clientX || parseInt(e.changedTouches[0].clientX);
      const delta = Math.floor((currentPosition - position) / ref.current.clientWidth * 100);

      setSwipeInfo(false);
      if (delta < 0) {
         if (lastElement.getBoundingClientRect().x < 1550) return;
         ref.current.style.transition = 'all 0.3s ease-in-out';
         setTransitionX(transitionX - 400);
      } else if (delta > 0) {
         if (firstElement.getBoundingClientRect().x > 902) return;
         ref.current.style.transition = 'all 0.3s ease-in-out';
         setTransitionX(transitionX + 400);
      } else {
         ref.current.style.transition = 'all 0.3s ease-in-out';
      }
   })

   useEffect(() => {
      if (swipeInfo) {
         document.addEventListener("mouseleave", onMouseUp, { capture: true });
         document.addEventListener("mouseup", onMouseUp, { capture: true });
         document.addEventListener("touchend", onMouseUp, { capture: true });
      }
      return () => {
         document.removeEventListener("mouseleave", onMouseUp, { capture: true });
         document.removeEventListener("mouseup", onMouseUp, { capture: true });
         document.removeEventListener("touchend", onMouseUp, { capture: true });
      }
   }, [swipeInfo]);

   useEffect(() => {
      const containerRef = ref.current;
      containerRef.addEventListener('touchstart', onMouseDown, { passive: false, capture: true });
      return () => containerRef.removeEventListener('touchstart', onMouseDown, { passive: false, capture: true });
   }, [onMouseDown]);

   const onActiveAdd = () => {
      const sliderItem = document.querySelectorAll('.preview__slider-item');
      const activeSlide = document.querySelectorAll('.active-scail');

      if (activeSlide.length > 1) {
         sliderItem.className -= 'active-scail';
      } else {
         sliderItem.className += 'active-scail';
      }

      console.log(activeSlide)
   }

   const elements = data.map((item, i) => {
      return (
         <div className={'preview__slider-item ' + item.classBg}
            key={i}
            onClick={onActiveAdd}
            id={item.id}>
            <p className="preview__slider-description">{item.description}</p>
            <div className="preview__slider-btns">
               <button> <img src={mainButtonLogo} alt="mainButtonLogo" /> watch online</button>
               <button> <div><img src={dollar} alt="dollar" /></div> Donate</button>
            </div>
         </div>
      )
   })

   return (
      <div className='slider'>
         <div className='preview__slider'>
            <div className='preview__slider-wrapper'
               onMouseDown={onMouseDown}
               ref={ref}
               style={{ transform: `translateX(${transitionX}px)` }}>
               {elements}
            </div>
            {/* <Pagination /> */}
         </div>
      </div>
   )
}

export default Slider;

