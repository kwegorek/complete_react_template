import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {addPostThunk, addPreviewPost, addPreviewPostThunk} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'
import GoBackHome from './GoBackHome'


class PreviewPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount(){
      console.log(this.props.previewPost)
  }


  render() {

    let post = this.props.previewPost; 
    let currentTime = new Date().toLocaleString()
 
    return (
        <React.Fragment>

     
        {post ? (
        <div id="blog-item-id" className="col-4 blog-item ">
        <div>
          <img className="blog-pic" src="./img/milky-way-2695569_640.jpg" />
        </div>
  
        <div className="blog-item-content">
          <div className='title-edited-container'>
          <h2 className='post-title'>{post.title}</h2>
          <h5 className='post-tag'>{post.tsg}</h5>
          <h5 >
            Last edited: <span>{currentTime}</span>
          </h5>

          <div><p>{post.content}</p>
            </div>
  
          </div>
         
  
        </div>
      </div>) : null}
      </React.Fragment>
        
    )
  }
}
const mapStateToProps = (state) => {
    return {
      previewPost:state.blogReducer.previewPost
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PreviewPost)
