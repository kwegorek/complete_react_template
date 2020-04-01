import React from 'react'

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
            <a className="a-download">Download CV</a>
            <a href="#about">
              <i className="fa fa-caret-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
