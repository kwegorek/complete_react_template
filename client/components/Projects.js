import React from 'react'
import {Footer} from './Footer'
import GoBackHome from './GoBackHome'
import {connect} from 'react-redux'
import {
  gotPLTranslation,
  gotENTranslation,
  gotDETranslation,
} from '../../store/languageReducer'
import {Link, withRouter} from 'react-router-dom'
import About from './About'

export const Projects = ({
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
  console.log(translationVersion, 'translationVersion')

  return (
    <div id="projects-href" className="content-project-container">
           {/* <div id='banner-blog-main'></div> */}
      {translationVersion
        ? translationVersion.map((section, indx) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <React.Fragment key={indx}>
                <h1 className="project-title">{section.project.toUpperCase()}</h1>

                <div>
                  <div className="row-projects">

                    <div className="col-4 project-item">
                      <a href='https://traffic-tracker-gh.herokuapp.com/'><img src="./img/traffic.png" /></a>
                      <h1>{section.projectsTitle[0]}</h1>
                      <p>{section.projectsDesc[0]}</p>
                    </div>

                    <div className="col-4 project-item">
                      <a href='https://grace-shopper-cornpops.herokuapp.com/'><img src="./img/shop.png" /></a>
                      <h1>{section.projectsTitle[1]}</h1>
                      <p>{section.projectsDesc[1]}</p>
                    </div>

                    <div className="col-4 project-item">
                      <a href='https://stormlooper.github.io/Exit/'><img src="./img/exit.png" /></a>
                      <h1>{section.projectsTitle[2]}</h1>
                      <p>{section.projectsDesc[2]}</p>
                    </div>

                  </div>
                </div>

                {/* <GoBackHome /> */}
              </React.Fragment>
            )
          })
        : null}
    </div>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Projects)
)
