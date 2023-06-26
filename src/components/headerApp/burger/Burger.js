import { useState } from 'react';
import './burger.scss';

const Burger = () => {

   const [burBtn, setBurBtn] = useState(true);

   const active = () => {
      const burgerActive = document.querySelector('.header__nav-burger');
      const body = document.querySelector('body');
      body.style.overflow = burBtn ? 'hidden' : '';
      const burgerBtn = document.querySelector('.burger');
      if (burBtn) {
         burgerActive.className = 'header__nav-burger active';
         burgerBtn.className = 'burger click';
         setBurBtn(!burBtn)
      } else {
         burgerActive.className = 'header__nav-burger';
         burgerBtn.className = 'burger';
         setBurBtn(!burBtn)
      }
   }

   return (
      <div className='burger' onClick={active}>
         <span></span>
      </div>
   )
}

export default Burger;