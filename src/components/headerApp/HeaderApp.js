import React from 'react';

import { ThemeContext, themes } from '../../context/theme-context';

import Switcher from './switcher/Switcher';// eslint-disable-line no-use-before-define
import Burger from './burger/Burger';

import './headerApp.scss';
import '../../index.scss';
import '../app/App.scss';

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
                     <li className="header__nav-item margin-10">
                        <a href="#" className="header__nav-link">About</a>
                     </li>
                     <li className="header__nav-item margin-10">
                        <a href="#" className="header__nav-link">Zoos</a>
                     </li>
                     <li className="header__nav-item margin-10">
                        <a href="#" className="header__nav-link">Map</a>
                     </li>
                     <li className="header__nav-item margin-10">
                        <a href="#" className="header__nav-link">Contact Us</a>
                     </li>
                     <li className="header__nav-item margin-10">
                        <a href="#" className="header__nav-link">Design</a>
                     </li>
                     <li className='header__social'>
                        <div className='header__social-logo'>
                           <a href="#">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clipPath="url(#clip0_33436_1462)">
                                    <path d="M13.75 0H6.25C2.79875 0 0 2.79875 0 6.25V13.75C0 17.2013 2.79875 20 6.25 20H13.75C17.2013 20 20 17.2013 20 13.75V6.25C20 2.79875 17.2013 0 13.75 0ZM18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125H6.25C3.8375 18.125 1.875 16.1625 1.875 13.75V6.25C1.875 3.8375 3.8375 1.875 6.25 1.875H13.75C16.1625 1.875 18.125 3.8375 18.125 6.25V13.75Z" fill="#FEFEFE" />
                                    <path d="M10 5C7.23875 5 5 7.23875 5 10C5 12.7613 7.23875 15 10 15C12.7613 15 15 12.7613 15 10C15 7.23875 12.7613 5 10 5ZM10 13.125C8.2775 13.125 6.875 11.7225 6.875 10C6.875 8.27625 8.2775 6.875 10 6.875C11.7225 6.875 13.125 8.27625 13.125 10C13.125 11.7225 11.7225 13.125 10 13.125Z" fill="#FEFEFE" />
                                    <path d="M15.3752 5.29148C15.7432 5.29148 16.0415 4.99319 16.0415 4.62523C16.0415 4.25727 15.7432 3.95898 15.3752 3.95898C15.0073 3.95898 14.709 4.25727 14.709 4.62523C14.709 4.99319 15.0073 5.29148 15.3752 5.29148Z" fill="#FEFEFE" />
                                 </g>
                                 <defs>
                                    <clipPath id="clip0_33436_1462">
                                       <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </a>
                        </div>
                        <div className='header__social-logo'>
                           <a href="#">
                              <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M20 1.92375C19.2562 2.25 18.4637 2.46625 17.6375 2.57125C18.4875 2.06375 19.1363 1.26625 19.4413 0.305C18.6488 0.7775 17.7737 1.11125 16.8412 1.2975C16.0887 0.49625 15.0162 0 13.8462 0C11.5762 0 9.74875 1.8425 9.74875 4.10125C9.74875 4.42625 9.77625 4.73875 9.84375 5.03625C6.435 4.87 3.41875 3.23625 1.3925 0.7475C1.03875 1.36125 0.83125 2.06375 0.83125 2.82C0.83125 4.24 1.5625 5.49875 2.6525 6.2275C1.99375 6.215 1.3475 6.02375 0.8 5.7225C0.8 5.735 0.8 5.75125 0.8 5.7675C0.8 7.76 2.22125 9.415 4.085 9.79625C3.75125 9.8875 3.3875 9.93125 3.01 9.93125C2.7475 9.93125 2.4825 9.91625 2.23375 9.86125C2.765 11.485 4.2725 12.6787 6.065 12.7175C4.67 13.8087 2.89875 14.4662 0.98125 14.4662C0.645 14.4662 0.3225 14.4512 0 14.41C1.81625 15.5812 3.96875 16.25 6.29 16.25C13.835 16.25 17.96 10 17.96 4.5825C17.96 4.40125 17.9537 4.22625 17.945 4.0525C18.7587 3.475 19.4425 2.75375 20 1.92375Z" fill="#FEFEFE" />
                              </svg>
                           </a>
                        </div>
                        <div className='header__social-logo'>
                           <a href="#">
                              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M19.15 1.575C18.6075 0.61 18.0188 0.4325 16.82 0.365C15.6225 0.28375 12.6112 0.25 10.0025 0.25C7.38875 0.25 4.37625 0.28375 3.18 0.36375C1.98375 0.4325 1.39375 0.60875 0.84625 1.575C0.2875 2.53875 0 4.19875 0 7.12125C0 7.12375 0 7.125 0 7.125C0 7.1275 0 7.12875 0 7.12875V7.13125C0 10.0413 0.2875 11.7138 0.84625 12.6675C1.39375 13.6325 1.9825 13.8075 3.17875 13.8888C4.37625 13.9588 7.38875 14 10.0025 14C12.6112 14 15.6225 13.9587 16.8212 13.89C18.02 13.8087 18.6088 13.6338 19.1513 12.6688C19.715 11.715 20 10.0425 20 7.1325C20 7.1325 20 7.12875 20 7.12625C20 7.12625 20 7.12375 20 7.1225C20 4.19875 19.715 2.53875 19.15 1.575ZM7.5 10.875V3.375L13.75 7.125L7.5 10.875Z" fill="#FEFEFE" />
                              </svg>
                           </a>
                        </div>
                     </li>
                  </ul>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default HeaderApp;