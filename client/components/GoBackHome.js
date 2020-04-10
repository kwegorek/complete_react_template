import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  gotPLTranslation,
  gotENTranslation,
  gotDETranslation,
} from '../../store/languageReducer'

export const GoBackHome = ({ 
   plTranslation,
  enTranslation,
  deTranslation,
  btnPL,
  btnEN,
  btnDE,}) => {

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
    <React.Fragment>
      {translationVersion
        ? translationVersion.map((section, indx) => {
            return (
      <div key={indx}className="about-backto-homepage">
        <Link style={{textDecoration: 'none', color: 'black'}} to="/home">
          {section.backBtn}
        </Link>
      </div>
    )
  })
: null}

    </React.Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GoBackHome))
