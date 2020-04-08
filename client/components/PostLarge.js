import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts, getOnePostThunk} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'

class PostLarge extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount(){

    this.props.gotPosts()

  }

  render() {

    let id = this.props.match.params.id; 
   let filtered = this.props.blogReducer.filter(function(el){if(el.id == Number(id)){return el}});
    let post = filtered[0]
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
        <h5 className='post-tag'>{post.tag}</h5>
        <h5 >
          Last edited: <span>{post.edited}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostLarge)
