import React from 'react'
import {Header} from './components/Header.js'
import {About} from './components/About.js'
import {Footer} from './components/Footer.js'
import Blog from './components/Blog.js'
import {Projects} from './components/Projects.js'
import  ContactForm from './components/ContactForm.js'



export const Main = () => {
  return (
         <div>
            <Header/>
            <About/>
            <Projects/>
            <Blog/>
            <ContactForm/>
         </div>
  )
}
