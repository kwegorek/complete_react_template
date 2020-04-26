/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import {NavLink} from 'react-router-dom'

import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts, getOnePostThunk} from '../../store/blogReducer'
import {changePLBtn, changeENBtn, changeDEBtn} from '../../store/btnReducer'
import {
  gotPLTranslation,
  gotENTranslation,
  gotDETranslation,
} from '../../store/languageReducer'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();

    this.state = {}

    // This binding is necessary to make `this` work in the callback
    this.handleClickPL = this.handleClickPL.bind(this)
    this.handleClickEN = this.handleClickEN.bind(this)
    this.handleClickDE = this.handleClickDE.bind(this)
    this.dropDownMenu = this.dropDownMenu.bind(this)
  }

  handleClickPL() {
    // console.log(this.state)

    this.props.changePLBtn(true)
    this.props.changeENBtn(false)
    this.props.changeDEBtn(false)
  }

  handleClickEN() {
    this.props.changePLBtn(false)
    this.props.changeENBtn(true)
    this.props.changeDEBtn(false)
  }

  handleClickDE() {
    this.props.changePLBtn(false)
    this.props.changeENBtn(false)
    this.props.changeDEBtn(true)
  }

  componentDidMount() {
    this.props.gotPosts()
    this.props.gotPLTranslation()
    this.props.gotENTranslation()
    this.props.gotDETranslation()

    //set default lan

    this.props.changePLBtn(false)
    this.props.changeENBtn(true)
    this.props.changeDEBtn(false)

    console.log(this.myRef, 'myRef')
  }

  dropDownMenu(e){

    let eventarget = e
    console.log(e.target, 'e')

    const node = this.myRef.current;
    console.log(node.className, 'clicked')

    if(node.className === 'nav-container'){

      node.className = ' ';
      node.className = 'responsive';

    }else {

      node.className= 'nav-container'


    }

 



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

    let translation = returnLanguageVersion(
      currentPlState,
      currentEnState,
      currentDeState
    )

    let translationVersion = translation
    let navBar = {borderBottom: 'solid 1px red', paddingBottom: '0.1em'}
 


    return (
      <div>
        {translationVersion
          ? translationVersion.map((section, indx) => {
              return (
                <div key={indx}>
                  <header>
                    <nav>

           
                      <ul id='dropDownClick' className="nav-container" ref={this.myRef}>
                        <li  className="list-item">
                          {' '}
                          <NavLink
                            style={{textDecoration: 'none', color: 'black'}}
                            className="nav-item navbar-home home-main"
                            to="/home"
                            exact
                            activeStyle={navBar}
                          >       {section.navaBar[0]}
             
                          </NavLink>
                          <NavLink
                            style={{textDecoration: 'none', color: 'black'}}
                            className="nav-item navbar-home"
                            to="/home"
                            exact
                            // activeStyle={navBar}
                          >        <h5  className='dropdownIcon'><p className='home-nav'> {section.navaBar[0]}</p><p className='dropdownIcon' onClick={(e)=>this.dropDownMenu(e)}> &#9776;</p>              </h5>
             
                          </NavLink>
  
                        </li>
                        
                        <li className="list-item">
                          {' '}
                          <NavLink
                            style={{textDecoration: 'none', color: 'black'}}
                            className="nav-item"
                            to="/about"
                            exact
                            activeStyle={navBar}
                          >
                            {section.navaBar[1]}
                          </NavLink>
                        </li>

                        <li className="list-item">
                          {' '}
                          <NavLink
                            style={{textDecoration: 'none', color: 'black'}}
                            className="nav-item"
                            to="/projects"
                            exact
                            activeStyle={navBar}
                          >
                            {section.navaBar[2]}
                          </NavLink>
                        </li>

                        <li className="list-item">
                          {' '}
                          <NavLink
                            style={{textDecoration: 'none', color: 'black'}}
                            className="nav-item"
                            to="/contact"
                            exact
                            activeStyle={navBar}
                          >
                            {section.navaBar[3]}
                          </NavLink>
                        </li>

                        <li className="list-item">
                          <NavLink
                            style={{textDecoration: 'none', color: 'black'}}
                            className="nav-item"
                            to="/blog"
                            exact
                            activeStyle={navBar}
                          >
                            {section.navaBar[4]}
                          </NavLink>
                        </li>

                        <li className="list-item">
                          <a
                            href="#"
                            style={{
                              textDecoration: 'none',
                              color: 'black',
                            }}
                            className="nav-item nav-lang"
                            onClick={this.handleClickPL}
                          >
                            {' '}
                            PL
                          </a>
                        </li>

                        <li className="list-item">
                          <a
                            href="#"
                            style={{
                              textDecoration: 'none',
                              color: 'black',
                            }}
                            className="nav-item nav-lang"
                            onClick={this.handleClickEN}
                          >
                            {' '}
                            DE
                          </a>
                        </li>

                        <li className="list-item">
                          <a
                            href="#"
                            style={{
                              textDecoration: 'none',
                              color: 'black',
                            }}
                            className="nav-item nav-lang"
                            onClick={this.handleClickDE}
                          >
                            {' '}
                            EN
                          </a>
                        </li>
                       
    
                       
                      </ul>
                      
                    </nav>
                  </header>
                </div>
              )
            })
          : null}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
