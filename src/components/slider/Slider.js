import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

import sliderData from '../../services/sliderData.json';

import './slider.scss';



const Slider = () => {
   const data = sliderData.data;
   const ref = useRef(null);
   const itemRefs = useRef([]);
   const [position, setPosition] = useState(0);
   const [swipeInfo, setSwipeInfo] = useState(false);
   const [transitionX, setTransitionX] = useState(0);
   const [itemId, setItemId] = useState('00');

   const onMouseDown = useCallback(e => {
      if (swipeInfo) return;
      setPosition(e.clientX || parseInt(e.touches[0].clientX));
      setSwipeInfo(true);
      ref.current.style.transition = undefined;
      ref.current.style.transform = undefined;
   }, [swipeInfo]);

   const onTouchMove = useCallback(e => {
      setPosition(parseInt(e.touches[0].clientX) - position)
   }, [])

   const onMouseUp = useCallback(e => {
      const slideCount = document.querySelectorAll('.preview__slider-item');
      const lastElement = document.getElementById(`0${slideCount.length}`);
      const firstElement = document.getElementById(`01`);
      const currentPosition = e.clientX || parseInt(e.changedTouches[0].clientX);
      const delta = Math.floor((currentPosition - position) / ref.current.clientWidth * 100);
      setSwipeInfo(false);

      const swiperWrapper = document.querySelector('.preview__slider');
      const swiperPosLeft = swiperWrapper.getBoundingClientRect().left;
      const swiperPosRight = swiperWrapper.getBoundingClientRect().right;

      function innerWidth() {
         if (window.innerWidth > 576) {
            return 400;
         } else {
            return 250;
         }
      }

      if (delta < 0) {
         if (lastElement.getBoundingClientRect().x < swiperPosRight - 1000) return;
         ref.current.style.transition = 'all 0.3s ease-in-out';
         setTransitionX(transitionX - innerWidth());
      } else if (delta > 0) {
         if (firstElement.getBoundingClientRect().x > swiperPosLeft - 50) return;
         ref.current.style.transition = 'all 0.3s ease-in-out';
         setTransitionX(transitionX + innerWidth());
      } else {
         ref.current.style.transition = 'all 0.3s ease-in-out';
      }
   })

   useEffect(() => {
      if (swipeInfo) {
         document.addEventListener("mouseleave", onMouseUp, { capture: true });
         document.addEventListener("mouseup", onMouseUp, { capture: true });
         document.addEventListener("touchmove", onTouchMove, { capture: true });
         document.addEventListener("touchend", onMouseUp, { capture: true });
      }
      return () => {
         document.removeEventListener("mouseleave", onMouseUp, { capture: true });
         document.removeEventListener("mouseup", onMouseUp, { capture: true });
         document.removeEventListener("touchmove", onTouchMove, { capture: true });
         document.removeEventListener("touchend", onMouseUp, { capture: true });
      }
   }, [swipeInfo]);

   useEffect(() => {
      const containerRef = ref.current;
      containerRef.addEventListener('touchstart', onMouseDown, { passive: false, capture: true });
      return () => containerRef.removeEventListener('touchstart', onMouseDown, { passive: false, capture: true });
   }, [onMouseDown]);

   const focusOnItem = (id) => {
      itemRefs.current.forEach(item => item.classList.remove('active-scail'));
      itemRefs.current[id].classList.add('active-scail');
      setItemId(itemRefs.current[id].id);
   }

   const onScrollClick = () => {

   }

   const elements = data.map((item, i) => {
      return (
         <div className={'preview__slider-item ' + item.classBg}
            ref={el => itemRefs.current[i] = el}
            key={i}
            onClick={() => focusOnItem(i)}
            id={item.id}>
            <p className="preview__slider-description">{item.description}</p>
            <div className="preview__slider-btns">
               <button className='preview__slider-btns-online'>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="16" cy="16" r="15.5" stroke="white" />
                     <path d="M21 16L13.5 20.3301V11.6699L21 16Z" fill="white" />
                  </svg>
                  watch online</button>
               <button className='preview__slider-btns-donate'>
                  <div>
                     <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.05566 0.155273V2.7832H4.70215V0.155273H6.05566ZM5.88867 14.5078V16.8633H4.54395V14.5078H5.88867ZM7.21582 11.6689C7.21582 11.3291 7.14551 11.0332 7.00488 10.7812C6.87012 10.5234 6.64746 10.292 6.33691 10.0869C6.02637 9.87598 5.61035 9.67969 5.08887 9.49805C4.33887 9.23438 3.68262 8.93848 3.12012 8.61035C2.56348 8.27637 2.12988 7.86621 1.81934 7.37988C1.51465 6.8877 1.3623 6.27539 1.3623 5.54297C1.3623 4.82227 1.52637 4.19824 1.85449 3.6709C2.18848 3.14355 2.65137 2.73633 3.24316 2.44922C3.83496 2.16211 4.52637 2.01855 5.31738 2.01855C5.92676 2.01855 6.47461 2.10937 6.96094 2.29102C7.45312 2.47266 7.87207 2.73926 8.21777 3.09082C8.56348 3.44238 8.82715 3.87598 9.00879 4.3916C9.19629 4.90137 9.29004 5.4873 9.29004 6.14941H7.18066C7.18066 5.77441 7.13672 5.44043 7.04883 5.14746C6.9668 4.84863 6.84375 4.59668 6.67969 4.3916C6.51562 4.18066 6.31641 4.01953 6.08203 3.9082C5.85352 3.79687 5.59277 3.74121 5.2998 3.74121C4.88379 3.74121 4.54102 3.82031 4.27148 3.97852C4.00195 4.13086 3.80273 4.3418 3.67383 4.61133C3.55078 4.88086 3.48926 5.18848 3.48926 5.53418C3.48926 5.86816 3.55371 6.16113 3.68262 6.41309C3.81152 6.66504 4.03125 6.89355 4.3418 7.09863C4.6582 7.29785 5.0918 7.5 5.64258 7.70508C6.39844 7.97461 7.05176 8.27637 7.60254 8.61035C8.15918 8.93848 8.58691 9.3457 8.88574 9.83203C9.19043 10.3125 9.34277 10.9189 9.34277 11.6514C9.34277 12.4072 9.16699 13.0488 8.81543 13.5762C8.46973 14.1035 7.9834 14.5049 7.35645 14.7803C6.73535 15.0498 6.01172 15.1846 5.18555 15.1846C4.66406 15.1846 4.14551 15.1172 3.62988 14.9824C3.12012 14.8418 2.65723 14.6133 2.24121 14.2969C1.8252 13.9805 1.49414 13.5615 1.24805 13.04C1.00195 12.5127 0.878906 11.8682 0.878906 11.1064H3.00586C3.00586 11.5635 3.06738 11.9443 3.19043 12.249C3.31348 12.5537 3.48047 12.7939 3.69141 12.9697C3.90234 13.1455 4.13672 13.2715 4.39453 13.3477C4.6582 13.4238 4.92188 13.4619 5.18555 13.4619C5.625 13.4619 5.99414 13.3887 6.29297 13.2422C6.59766 13.0898 6.82617 12.8789 6.97852 12.6094C7.13672 12.334 7.21582 12.0205 7.21582 11.6689Z" fill="white" />
                     </svg>
                  </div>
                  Donate
               </button>
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
            <div className='preview__slider-pagination'>
               <div className='preview__slider-numbers'>
                  <span >{itemId}/</span>08
               </div>
               <div className='preview__slider-scroll'>
                  <div className='preview__slider-dots'
                     onClick={onScrollClick}></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Slider;

