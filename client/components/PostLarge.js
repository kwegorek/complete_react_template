import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'

class PostLarge extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWilUpdate(){

  }

  render() {

    let postToDisplay = this.props.match.params.id
 
    return (
        <div className='blog-posts-container'>
          {postToDisplay ?  (<div>
            <h1>NUmber:{postToDisplay}</h1>
          <h1>hello</h1></div> ): null}
           
        </div>
      
        
    )
  }
}
const mapStateToProps = state => {
  return {
    // blogReducer: state.blogReducer.blogposts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // gotPosts: () => dispatch(gotPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLarge)
