import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'
import AddBlogPost from './AddBlogPost'

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    let allBlogPosts = this.props.gotPosts()
  }

  render() {
    let blogPosts = this.props.blogReducer
    console.log(blogPosts, '---blogPosts')
    return (
      <React.Fragment>
        <div id="blog" className="content-blog-container container-uni">
          <div>
          <h1 id="blog-title"><span>POSTS</span></h1>
          <div><Link to='/blog/addpost' style={{ textDecoration: 'none', color: 'black', padding:'5px' }}><i className="fa fa-plus-circle" aria-hidden="true"></i></Link><span>Add Post</span></div>
        
          <div>
            </div>
            </div>
            <div className="row-blog">
              {blogPosts
                ? blogPosts.map((post, indx) => {
                    return <Post key={indx} post={post} />
                  })
                : null}
            </div>
            <div>
              <a href="#contact">
                <i id="last-caret" className="fa fa-angle-down"></i>
              </a>
            </div>
      
          </div>
        
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    blogReducer: state.blogReducer.blogposts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gotPosts: () => dispatch(gotPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
