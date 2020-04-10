import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'
import AddBlogPost from './AddBlogPost'
import GoBackHome from './GoBackHome'

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    let blogPosts = this.props.blogReducer
    let filtered = blogPosts.filter((el) => {
      if (el.tag.indexOf(this.state.search.toLocaleLowerCase()) > -1) {
        return el.tag
      }
    })



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


    return (
      <React.Fragment>
        <div id="blog" className="content-blog-container container-uni">
          {translationVersion
            ? translationVersion.map((section, indx) => {
                return (
                  <div key={indx}>
                    <div>
                      <h1 id="blog-title">
                        <span>{section.navaBar[4]}</span>
                      </h1>
                      <div>
                        <Link
                          to="/blog/addpost"
                          style={{
                            textDecoration: 'none',
                            color: 'black',
                            padding: '5px',
                          }}
                        >
                          <i
                            className="fa fa-plus-circle"
                            aria-hidden="true"
                          ></i>
                        </Link>
                        <span>Add Post</span>
                      </div>
                      <div id='blog-search'>
                        <h3>{section.searchByTag}</h3>{' '}
                        <input  
                          type="text"
                          name="search"
                          value={this.state.search}
                          onChange={this.handleChange}
                          placeholder={section.searchByTag}
                        
                        ></input>
                      </div>
                      <div></div>
                    </div>
                  </div>
                )
              })
            : null}

          <div className="row-blog">
            {this.state.search.length === 0
              ? blogPosts
                ? blogPosts.map((post, indx) => {
                    return <Post key={indx} post={post} />
                  })
                : null
              : filtered
              ? filtered.map((post, indx) => {
                  return <Post key={indx} post={post} />
                })
              : null}
          </div>
          <div>
            <GoBackHome />
          </div>
        </div>
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
  console.log('dispatched gotPosts)')
  return {
    gotPosts: () => dispatch(gotPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
