import React from 'react'
import {Header} from './Header.js'
import {About} from './About.js'
import {Footer} from './Footer.js'
import {Blog} from './Blog.js'
import {Projects} from './Projects.js'
import  ContactForm from './ContactForm.js'



export const Main = props => {
  return (
    <React.Fragment>
         <div className="main-container">
            <Header/>
            <About/>
            <Projects/>
            <Blog/>
            <ContactForm/>
            <Footer/>
         </div>

    </React.Fragment>
  )
}
