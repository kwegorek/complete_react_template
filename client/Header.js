import React from 'react'

export const Header = props => {
  return (
    <div>
      <header>
        <nav className="nav-right">
          <ul id="nav-container">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#conact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
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
