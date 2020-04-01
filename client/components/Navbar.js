import React from 'react'

export const Navbar = props => {
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
    </div>
  )
}
