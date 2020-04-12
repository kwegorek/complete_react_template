import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {gotInteractions, addLikeThunk} from '../../store/userInteractionReducer'
import {gotPosts, getOnePostThunk} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'

class PostLarge extends React.Component {
  constructor(props) {
    super(props)

    this.state = {likes: null}

    this.handleClickInteraction = this.handleClickInteraction.bind(this)
  }

  componentDidMount() {
    this.props.gotPosts()
    this.props.gotInteractions()

  }

  handleClickInteraction(e) {
    let currentClicked = e.target.id
    var ifCLickedHeart = localStorage.getItem(currentClicked)
    let num = this.props.alllikes
      .map(function (el) {
        return el.likes
      })
      .join('')

    console.log(num, 'num-------r----------t')

    // this.setState({
    //   likesNum:Number(num)+1
    // })

    localStorage.clear()

    console.log(ifCLickedHeart, 'data')

    if (currentClicked === 'heart') {
      localStorage.setItem(currentClicked, 'heart')

      //  console.log(this.props.likes, 'this.props.likes')
      //   this.props.gotInteractions()
      // let num = this.props.currentLikesNumber +1;

      let obj = {likes: Number(num) + 1}
      console.log('obj', obj)
      this.props.addLikeThunk(obj)
    } else if (currentClicked === 'comments' && !ifCLickedHeart) {
      localStorage.setItem(currentClicked, 'comments')
    } else if (currentClicked === 'seen' && !ifCLickedHeart) {
      localStorage.setItem(currentClicked, 'seen')
    }

    let currentLikes = this.props.alllikes
      .map(function (el) {
        return el.likes
      })
      .join('')

    this.setState({
      likes: Number(currentLikes),
    })
  }

  render() {

    let likesAll = this.props.alllikes
    .map(function (el) {
      return el.likes
    })
    .join('')

    let id = this.props.match.params.id
    let filtered = this.props.blogReducer.filter(function (el) {
      if (el.id == Number(id)) {
        return el
      }
    })
    let post = filtered[0]
    // console.log(this.props.likes, 'this.props.likes')

    // let heartsNum = this.props.likes.currentLikesState.likes

    let heartsNum = true
    return (
      <React.Fragment>
        {post ? (
          <div id="blog-item-large" className="col-12 blog-item ">
            <div className="banner-blog large-img-conatiner">
              <img
                className="banner-blog-img-large"
                src="../img/blog1.jpg"
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
                        onClick={(e) => this.handleClickInteraction(e)}
                        className="fa fa-heart"
                        aria-hidden="true"
                      ></i>

                      <span className="number-holder">{Number(likesAll)}</span>
                    </a>
                  </div>
                  <div>
                    <a>
                      <i
                        id="comments"
                        onClick={(e) => this.handleClickInteraction(e)}
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
                        onClick={(e) => this.handleClickInteraction(e)}
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
                    <img src={post.imageUrlAdditional1}></img>
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
    blogReducer: state.blogReducer.blogposts,
    alllikes: state.userInteractionReducer.alllikes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    gotPosts: () => dispatch(gotPosts()),
    gotInteractions: () => dispatch(gotInteractions()),
    addLikeThunk: (val) => dispatch(addLikeThunk(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLarge)
