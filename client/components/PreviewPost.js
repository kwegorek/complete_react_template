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
        <div id="blog-item-large" className="col-12 blog-item ">
          <div className="banner-blog large-img-conatiner">
            <img
              className="banner-blog-img-large"
              src={post.imageUrl}
            ></img>
          </div>

          <div className="blog-item-content">
            <div className="title-edited-co ntainer">
              <div id="title-container-large">{post.title}</div>

              <div className="post-love-comment-views-container">
                <div>
                  <a>
                    <i
                      id="heart"
                      // onClick={(e) => this.handleClickInteraction(e)}
                      className="fa fa-heart"
                      aria-hidden="true"
                    ></i>
{/* 
                    <span className="number-holder">{Number(likesAll)}</span> */}
                  </a>
                </div>
                <div>
                  <a>
                    <i
                      id="comments"
                      // onClick={(e) => this.handleClickInteraction(e)}
                      className="fa fa-comments"
                      aria-hidden="true"
                    ></i>
                    <span className="number-holder"></span>
                  </a>
                </div>
                <div>
                  <a>
                    <i
                      id="seen"
                      // onClick={(e) => this.handleClickInteraction(e)}
                      className="fa fa-eye"
                      aria-hidden="true"
                    ></i>
                    <span className="number-holder"></span>
                  </a>
                </div>
              </div>
              <div className="post-large-all-content">
                <div id="content-container-large">{post.content}</div>
                <div id="content-container-large">{post.contentPar2}</div>
                <div id="content-container-large">{post.contentPar3}</div>
                <div id="content-container-large">{post.contentPar4}</div>
                <div id="content-container-large">
                  {/* <img src={post.imageUrlAdditional1}></img> */}
                </div>
                <div id="content-container-large">{post.contentPar5}</div>

                {/* <iframe width="800" height="600" frameborder="0" scrolling="no"src={post.iframe}></iframe> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
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
