/* eslint-disable react/jsx-key */
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  gotPLTranslation,
  gotENTranslation,
  gotDETranslation,
} from '../../store/languageReducer'

const Header = ({
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
    <div>
      {/* <div className="header-banner"></div> */}
      <div>
        {translationVersion
          ? translationVersion.map((section, indx) => {
              return (
              
                <React.Fragment key={indx}>
                  <div className="banner-text">
                    <h1 id="intro">{section.textHome}</h1>
                    <br />
                    <br />
                    <div className="cv-btn">
                      <a href="https://www.linkedin.com/in/katarzyna-wegorek" className="a-download">{section.contact}</a>
                    </div>
                    <div className="footer-main">
                    <div className="footer-item">
                      {' '}
                      <a href="https://www.linkedin.com/in/katarzyna-wegorek" className="fa">
                        Linkedin{' '}
                      </a>
                    </div>
                    <div className="footer-item">
                      {' '}
                      <a
                        href="https://medium.com/@ka.wegorek"
                        className="fa"
                      >
                        Medium
                      </a>
                    </div>
                    <div className="footer-item">
                      <a href="https://github.com/kwegorek" className="fa">
                        GitHub
                      </a>
                    </div>
                  </div>
                  </div>
                  
                </React.Fragment>
              )
            })
          : null}
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
