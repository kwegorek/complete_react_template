import React from 'react'
import {Footer} from './Footer'

export const Header = (props) => {
  return (
    <div>
      <div className="header-banner"></div>
      <div>
        <div className="banner-text">
          <h1 id="intro"></h1>
          <br />
          <br />
          <div className="cv-btn">
            <a className="a-download">Contact</a>
            {/* <div> */}
              {/* <a href="#about">
                <i className="fa fa-angle-down"></i>
              </a>

            </div> */}
          
          </div>
        </div>
        <div className='footer-main'>
       
          <div className="footer-item">
            {' '}
            <a href="#" className="fa">Linkedin </a>
          </div>
          <div className="footer-item">
            {' '}
            <a
              href="https://www.linkedin.com/in/katarzyna-wegorek"
              className="fa"
            >Medium</a>
          </div>
          <div className="footer-item">
            <a
              href="https://github.com/kwegorek"
              className="fa"
            >GitHub</a>
          </div>
        </div>
   

        </div>
           
      </div>
      

  )
}
