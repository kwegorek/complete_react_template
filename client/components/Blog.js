import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'
import AddBlogPost from './AddBlogPost'
import { GoBackHome } from './GoBackHome'

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search:''
    }


    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let allBlogPosts = this.props.gotPosts()
  }

  handleChange(){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let blogPosts = this.props.blogReducer
    let searchState = this.state.search.length; 
    let filtered = blogPosts.filter(el=> {if(el.tag.indexOf(this.state.search.toLocaleLowerCase())>-1){return el.tag}})
    

    return (
      <React.Fragment>
        <div id="blog" className="content-blog-container container-uni">
          <div>
    
    
          <h1 id="blog-title"><span>POSTS</span></h1>
          <div><Link to='/blog/addpost' style={{ textDecoration: 'none', color: 'black', padding:'5px' }}><i className="fa fa-plus-circle" aria-hidden="true"></i></Link><span>Add Post</span></div>
        <div><h3>Serch by tag</h3> <input  type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleChange} placeholder="search by tag: eg. javascript" ></input></div>
          <div>
            </div>
            </div>
            <div className="row-blog">

              {this.state.search.length === 0 ?
             blogPosts
             ? blogPosts.map((post, indx) => {
                 return <Post key={indx} post={post} />
               })
             : null :filtered
              ? filtered.map((post, indx) => {
                  return <Post key={indx} post={post} />
                })
              : null
              
            
            
            }




            </div>
            <div>
            <GoBackHome/>

         
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
