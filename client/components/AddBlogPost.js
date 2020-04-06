import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'

class AddBlogPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    console.log('mouned')
  }

  render() {
    return (
      <div className='add-post-container'>
        <div className='blog-post-title-add'><h1>Add Post</h1></div>
        <div >

        <form className="form-inputs ">
          <div className="blog-item-add">
            {/* <label>Image:</label> */}
            <input className="blog-item-input" placeholder="picture"></input>
          </div>
          <div className="blog-item-add">
            {/* <label>Title:</label> */}
            <input className="blog-item-input" placeholder="title"></input>
          </div>
          <div className="blog-item-add">
            {/* <label>Content:</label> */}
            <textarea
              className="blog-item-input"
              placeholder="content"
            ></textarea>
          </div>
          <div className="blog-item-add btn-add">
            <button>
              Add Post
            </button>
          </div>
        </form>

        </div>

      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogPost)
