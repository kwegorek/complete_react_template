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

<div id="wrapper-contact">
 <h1 className='contact-title'>{section.contactText}</h1>
 <div> <p><i className="fa fa-map-marker"></i>New York City, NY/Warsaw, Poland</p></div>
 <div><p><i className="fa fa-envelope"></i> ka.wegorek@gmail.com</p></div>
 <div><p><i className="fa fa-phone"></i>882 662 917</p></div>
                      {/* <div>
                      <h2>GET IN TOUCH</h2>
                      <h2>
                        <span>
                          <i className="fa fa-map-marker"></i>
                        </span>
                        New York City, New York
                      </h2>
                      <h2>
                        <span>
                          <i className=" fa fa-envelope"></i>
                        </span>
                        ka.wegorek@gmail.com
                      </h2>
                      <h2>
                        <span>
                          <i className=" fa fa-phone"></i>
                        </span>
                      </h2>

                      </div>
                   */}
                    </div>
                  {/* <div id="banner-blog-main"></div> */}
                  {/* <div
                    id="wrapper"
                    className="contact-grid-container container-uni"
                  >
                    <div id='media-query-form'>
                      <div id="first">
                        <h2>CONTACT FORM</h2>
                        <p className="contact-text">{section.contactText}</p>

                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder={section.name}
                        />

                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder={section.email}
                        />

                        <textarea
                          className="user-message"
                          placeholder={section.message}
                        ></textarea>

                        <button type="submit" id="send-btn">
                          {section.send}
                        </button>
                      </div>
                    </div>

                  </div> */}
                  {/* <div>
                    <GoBackHome />
                  </div> */}
                </React.Fragment>
              )
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
