import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    let allBlogPosts = this.props.gotPosts(); 

  }

  render() {
    let blogPosts = this.props.blogReducer; 
    console.log(blogPosts, '---blogPosts')
    return (
      <React.Fragment>
        <div id="blog" className="content-blog-container container-uni">
          <h1 id="blog-title">BLOG</h1>
          <div className="blog-grid">
            {blogPosts
              ? blogPosts.map((post, indx) => {
                  return <Post key={indx} post={post} />
                })
              : null}
            <a href="#contact">
              <i id="last-caret" className="fa fa-caret-down"></i>
            </a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    blogReducer: state.blogReducer.blogposts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotPosts: () => dispatch(gotPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
