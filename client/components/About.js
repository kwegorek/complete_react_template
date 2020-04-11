/* eslint-disable no-irregular-whitespace */
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  gotPLTranslation,
  gotENTranslation,
  gotDETranslation,
} from '../../store/languageReducer'

import GoBackHome from './GoBackHome'

const About = ({
  plTranslation,
  enTranslation,
  deTranslation,
  btnPL,
  btnEN,
  btnDE,
}) => {
  function returnLanguageVersion(currentPlState, currentDeState) {
    if (currentPlState === true) {
      return plTranslation
    } else if (currentDeState === true) {
      return deTranslation
    } else {
      return enTranslation
    }
  }

  let translationVersion = returnLanguageVersion(btnPL, btnEN, btnDE)

  return (


    <div id="projects-href" className="content-about-container">
           <div id='banner-blog-main'></div>
    {translationVersion
      ? translationVersion.map((section, indx) => {
          return (
            // eslint-disable-next-line react/jsx-key
                         <div key={indx}>
                <div id="about" className="content-about-container">

                  
               
                  <div>
                    <h1>{section.navaBar[1]}</h1>
                    <p id="main-about">{section.about}</p>
                  </div>


                  <div className='about-story'>
                    <p>{section.aboutStory}</p>
                    {/* <img id='pic-boat'src={'./img/boatYacht.jpg'}></img> */}
                  </div>


              
                  {/* <div>
                    <h1>FAVOURITE SOFTWARE</h1>
                    <p>{section.aboutStoryFavouriteApp}</p>
                  </div> */}

                  <div>
                  <h1 id='skills-title'>SKILLS</h1>
            
                    <p className='skills-container'>
                    JavaScript, HTML/CSS, React, Redux, Express, Sequelize, SQL, PostgreSQL, Git, GitHub, BASH
                    </p>
                 
                  </div>
                  <div className='icons'>
                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/javascript.png"/></a>
                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/react-native.png"/></a>
                
               
                
                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/html.png"/></a>
                
                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/css3.png"/></a>
                

                  <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/postgreesql.png"/></a>
                
                    </div>

                    
                  <div className="about-backto-homepage">
                    <GoBackHome />
                  </div>
                </div>
              </div>
          )
        })
      : null}
  </div>
    // <React.Fragment>

    //          
    //   {translationVersion
    //     ? translationVersion.map((section, indx) => {
    //         return (
              
      
    //           <div key={indx}>
    //             <div id="about" className="content-about-container">

                  
               
    //               <div>
    //                 <h1>{section.navaBar[1]}</h1>
    //                 <p id="main-about">{section.about}</p>
    //               </div>


    //               <div className='about-story'>
    //                 <p>{section.aboutStory}</p>
    //                 {/* <img id='pic-boat'src={'./img/boatYacht.jpg'}></img> */}
    //               </div>


              
    //               {/* <div>
    //                 <h1>FAVOURITE SOFTWARE</h1>
    //                 <p>{section.aboutStoryFavouriteApp}</p>
    //               </div> */}

    //               <div>
    //               <h1 id='skills-title'>SKILLS</h1>
            
    //                 <p className='skills-container'>
    //                 JavaScript, HTML/CSS, React, Redux, Express, Sequelize, SQL, PostgreSQL, Git, GitHub, BASH
    //                 </p>
                 
    //               </div>
    //               <div className='icons'>
    //               <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/javascript.png"/></a>
    //               <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/react-native.png"/></a>
                
               
                
    //               <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/html.png"/></a>
                
    //               <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/css3.png"/></a>
                

    //               <a href="https://icons8.com/icon/39853/javascript"><img src="https://img.icons8.com/ios/50/000000/postgreesql.png"/></a>
                
    //                 </div>

                    
    //               <div className="about-backto-homepage">
    //                 <GoBackHome />
    //               </div>
    //             </div>
    //           </div>
    //         )
    //       })
    //     : null}
    //    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    plTranslation: state.languageReducer.translationPL,
    enTranslation: state.languageReducer.translationEN,
    deTranslation: state.languageReducer.translationDE,
    btnPL: state.btnReducer.btnPL,
    btnEN: state.btnReducer.btnEN,
    btnDE: state.btnReducer.btnDE,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gotPLTranslation: () => dispatch(gotPLTranslation()),
    gotENTranslation: () => dispatch(gotENTranslation()),
    gotDETranslation: () => dispatch(gotDETranslation()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About))
