/* eslint-disable no-irregular-whitespace */
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  gotPLTranslation,
  gotENTranslation,
  gotDETranslation,
} from '../../store/languageReducer'

import {GoBackHome} from './GoBackHome'

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

  let translationVersion = returnLanguageVersion(
    btnPL,
    btnEN,
    btnDE
  )

  return (
    <div>
           
      {translationVersion
        ? translationVersion.map((section, indx) => {
            return (
              <div key={indx}>
                <div id="about" className="content-about-container">
                  <h1>{section.navaBar[1]}</h1>
                  <p id="main-about">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    In my teenage years I fell in love with sailing. After a
                    trip through a famous lake near my hometown I eagerly gained
                    a skipper license thereafter. I sailed in Europe, both lakes
                    and seas. My favorite excursion was a 7-day trip between
                    Croatian islands where I spent each night on a different
                    island. My next adventure will be to sail through the
                    Caribbean and Thailand islands
                  </p>
                  <p>
                    I am proud of myself for juggling the hectic and rewarding
                    benefits of being a mom to my 2 year old baby, in addition
                    to simultaneously attending and graduating the Grace Hopper
                    Program. After graduating The Grace Hopper Program I feel
                    empowered and inspired to create an environment where others
                    can flourish and collaborate positively to achieve their
                    goals.{' '}
                  </p>
                  <div className="about-backto-homepage">
                    <GoBackHome />
                  </div>
                </div>
              </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About))
