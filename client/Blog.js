import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts} from '../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount(){

    let allBlogPosts = this.props.gotPosts(); 

    
  }

  render() {
  



    return (
      <React.Fragment>
        <div id="blog" className="content-blog-container container-uni">
          <h1 id="blog-title">BLOG</h1>
          <div className="blog-grid">

            {/* <Post /> */}
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
    blogposts: state.blogposts,
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotPosts: () => dispatch(gotPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)