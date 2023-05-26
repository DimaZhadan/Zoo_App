import Slider from '../slider/Slider';

import mainButtonLogo from '../../resources/img/main_btn_logo.svg';
import instagramLogo from '../../resources/img/instagram.svg';
import twitterLogo from '../../resources/img/twitter.svg';
import youtubeLogo from '../../resources/img/youTube.svg';


import './preview.scss';

const Preview = () => {
   return (
      <section className="preview">
         <div className='container'>
            <h1 className='preview__header'>
               Watch your favorite animal online
            </h1>
            <div className='preview__btn'>
               <a href="#"><img className='preview__btn-logo' src={mainButtonLogo} alt="Main Button Logo" />
               watch online</a>
            </div>
            <div className='preview__social'>
               <div className='preview__social-logo'>
                  <a href="#"><img src={instagramLogo} alt="Instagram logo" /></a>
               </div>
               <div className='preview__social-logo'>
                  <a href="#"><img src={twitterLogo} alt="Twitter logo" /></a>
               </div>
               <div className='preview__social-logo'>
                  <a href="#"><img src={youtubeLogo} alt="YouTube logo" /></a>
               </div>
            </div>
            <Slider/>
         </div>
      </section>
   )
}

export default Preview;