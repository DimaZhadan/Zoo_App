import { useState } from 'react';
import './burger.scss';

const Burger = () => {

   const [burBtn, setBurBtn] = useState(true);
   const active = () => {
      const burgerActive = document.querySelector('.header__nav-burger');
      if (burBtn) {
         burgerActive.className = 'header__nav-burger active';
         setBurBtn(!burBtn)
      } else {
         burgerActive.className = 'header__nav-burger';
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