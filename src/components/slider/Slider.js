import mainButtonLogo from '../../resources/img/main_btn_logo.svg';
import dollar from '../../resources/img/dollar.svg';

import './slider.scss';

const Slider = () => {
   return (
      <div className='slider'>
         <div className='preview__slider'>
            <div className="preview__slider-item eagle-bg">
               <p className="preview__slider-description">Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
               <div className="preview__slider-btns">
                  <button> <img src={mainButtonLogo} alt="mainButtonLogo" /> watch online</button>
                  <button> <div><img src={dollar} alt="dollar" /></div> Donate</button>
               </div>
            </div>
            <div className="preview__slider-item panda-bg active-scail">
               <p className="preview__slider-description">Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
               <div className="preview__slider-btns">
                  <button> <img src={mainButtonLogo} alt="mainButtonLogo" /> watch online</button>
                  <button> <div><img src={dollar} alt="dollar" /></div> Donate</button>
               </div>
            </div>
            <div className="preview__slider-item monkey-bg">
               <p className="preview__slider-description">Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
               <div className="preview__slider-btns">
                  <button> <img src={mainButtonLogo} alt="mainButtonLogo" /> watch online</button>
                  <button> <div><img src={dollar} alt="dollar" /></div> Donate</button>
               </div>
            </div>
            <div className="preview__slider-item aligator-bg">
               <p className="preview__slider-description">Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
               <div className="preview__slider-btns">
                  <button> <img src={mainButtonLogo} alt="mainButtonLogo" /> watch online</button>
                  <button> <div><img src={dollar} alt="dollar" /></div> Donate</button>
               </div>
            </div>
            <div className="preview__slider-item fox-bg ">
               <p className="preview__slider-description">Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
               <div className="preview__slider-btns">
                  <button> <img src={mainButtonLogo} alt="mainButtonLogo" /> watch online</button>
                  <button> <div><img src={dollar} alt="dollar" /></div> Donate</button>
               </div>
            </div>
            <div className="preview__slider-item sloth-bg">
               <p className="preview__slider-description">Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
               <div className="preview__slider-btns">
                  <button> <img src={mainButtonLogo} alt="mainButtonLogo" /> watch online</button>
                  <button> <div><img src={dollar} alt="dollar" /></div> Donate</button>
               </div>
            </div>
            <div className="preview__slider-item elephant-bg">
               <p className="preview__slider-description">Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
               <div className="preview__slider-btns">
                  <button> <img src={mainButtonLogo} alt="mainButtonLogo" /> watch online</button>
                  <button> <div><img src={dollar} alt="dollar" /></div> Donate</button>
               </div>
            </div>
            <div className="preview__slider-item panter-bg">
               <p className="preview__slider-description">Panda’s name is Bei Bei. He is 2 years old. Bei Bei is from China. He loves bamboos.</p>
               <div className="preview__slider-btns">
                  <button> <img src={mainButtonLogo} alt="mainButtonLogo" /> watch online</button>
                  <button> <div><img src={dollar} alt="dollar" /></div> Donate</button>
               </div>
            </div>
         </div>
         <div className='slider-pagination'>
            
         </div>
      </div>
   )
}

export default Slider;

