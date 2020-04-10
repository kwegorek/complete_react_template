import React from 'react'
import GoBackHome from './GoBackHome'
import {changePLBtn, changeENBtn, changeDEBtn} from '../../store/btnReducer'
import {
  gotPLTranslation,
  gotENTranslation,
  gotDETranslation,
} from '../../store/languageReducer'
import {connect} from 'react-redux'

class ContactForm extends React.Component {
  constructor() {
    super()

    this.state = {}
  }


  render() {

    let currentPlState = this.props.btnPL
    let currentEnState = this.props.btnEN
    let currentDeState = this.props.btnDE

    let pltranslation = this.props.plTranslation
    let entranslation = this.props.enTranslation
    let detranslation = this.props.deTranslation

    console.log(
      currentPlState,
      currentEnState,
      currentDeState,
      'currentDeState'
    )

    function returnLanguageVersion(currentPlState, currentDeState) {
      if (currentPlState === true) {
        return pltranslation
      } else if (currentDeState === true) {
        return detranslation
      } else {
        return entranslation
      }
    }

    let translationVersion = returnLanguageVersion(
      currentPlState,
      currentEnState,
      currentDeState
    )


    return (
      <React.Fragment>

{translationVersion
? translationVersion.map((section, indx) => {
return (


<React.Fragment key={indx}>
        <div id="contact" className="contact-grid-container container-uni">
          <div className="row">
            <div className="col-12">
              <h2>CONTACT ME</h2>
            </div>
          </div>
          <div id="contact-wrapper" className="row">
            <p className="contact-text">
             {section.contactText}
            </p>
            <div className="col-12  media-col">
              <input
                type="text"
                id="username"
                name="username"
                placeholder={section.name}
              />
            </div>
            <div className="col-12  media-col">
              <input type="text" id="email" name="email" placeholder={section.email}/>
            </div>
            <div className="col-12  media-col">
              <textarea className="user-message" placeholder={section.message}></textarea>
            </div>
            <div className="col-12  media-col">
              <button type="submit" id="send-btn">
               {section.send}
              </button>
            </div>
          </div>
          <div>
          <GoBackHome/>

          </div>
    
        </div>
      </React.Fragment>)
})
: null}


      </React.Fragment>
     
    )
  }
}


const mapStateToProps = (state) => {
  return {
    blogReducer: state.blogReducer.blogposts,
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
    gotPosts: () => dispatch(gotPosts()),
    gotPLTranslation: () => dispatch(gotPLTranslation()),
    gotENTranslation: () => dispatch(gotENTranslation()),
    gotDETranslation: () => dispatch(gotDETranslation()),
    changePLBtn: (btnState) => dispatch(changePLBtn(btnState)),
    changeENBtn: (btnState) => dispatch(changeENBtn(btnState)),
    changeDEBtn: (btnState) => dispatch(changeDEBtn(btnState)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
