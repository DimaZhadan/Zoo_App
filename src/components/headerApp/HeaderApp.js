import React from 'react';

import { ThemeContext, themes } from '../../context/theme-context';

import Switcher from './switcher/Switcher';// eslint-disable-line no-use-before-define
import Burger from './burger/Burger';

import './headerApp.scss';
import '../../index.scss'

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
               <li className="header__list-item">
                  <div className='header__list-wrapper'>
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
                     <Burger />
                  </div>
                  <ul className="header__nav-burger">
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
            </ul>
         </nav>
      </header>
   )
}

export default HeaderApp;