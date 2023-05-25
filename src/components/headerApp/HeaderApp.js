import React from 'react';
import Switcher from './switcher/Switcher';
import { ThemeContext, themes } from '../../context/theme-context';

import './headerApp.scss';
import '../../index.scss'
import appLogo from '../../resources/img/logo.svg';

const HeaderApp = () => {
   return (
      <header className="header">
         <nav className="container">
            <ul className="header__list">
               <li className="header__list-item">
                  <figure className="header__list-logo">
                     <a href="#" className='header__list-bgimg'> </a>
                  </figure>
               </li>
               <li className="header__list-item">
                  <ul className="header__nav">
                     <li className="header__nav-item">
                        <a href="#" className="header__nav-link">About</a>
                     </li>
                     <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Zoos</a>
                     </li>
                     <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Map</a>
                     </li>
                     <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Contact Us</a>
                     </li>
                     <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Design</a>
                     </li>
                  </ul>
               </li>
               <li>
                  <ThemeContext.Consumer>
                     {({ theme, setTheme }) => (
                        <Switcher
                           onChange={() => {
                              if (theme === themes.light) setTheme(themes.dark)
                              if (theme === themes.dark) setTheme(themes.light)
                           }}
                           value={theme === themes.dark}
                        />
                     )}
                  </ThemeContext.Consumer>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default HeaderApp;