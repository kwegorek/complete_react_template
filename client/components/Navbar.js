import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = props => {
  return (
    <div>
      <header>
        <nav className="nav-right" >
            <ul id="nav-container">
            <NavLink style={{ textDecoration: 'none', color: 'white' }} className='nav-item'to='/about' activeStyle={{backgrounud:'orange'}}>About</NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} className='nav-item'to='/projects' activeStyle={{backgrounud:'orange'}}>Projects</NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} className='nav-item'to='/contact' activeStyle={{backgrounud:'orange'}}>Contact</NavLink>
            <NavLink  style={{ textDecoration: 'none', color: 'white' }}className='nav-item'to='/contact' activeStyle={{backgrounud:'orange'}}>Blog</NavLink>

            </ul>
           
          {/* <ul id="nav-container"> */}
            {/* <li>
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
          </ul> */}
        </nav>
      </header>
    </div>
  )
}
