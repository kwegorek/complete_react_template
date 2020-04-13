import React from 'react'
import {Post} from './Post'
import {connect} from 'react-redux'
import {addPostThunk, addPreviewPost, addPreviewPostThunk} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'

let savedpost = { imageUrl:"",
title: "",
content: "", 
tag:"", }
if(localStorage.getItem('newpost')){
  savedpost = JSON.parse(localStorage.getItem('newpost')); 
}else{

  localStorage.setItem('newpost',JSON.stringify(savedpost))

}

class AddBlogPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl:savedpost.title,
      title: savedpost.title,
      content: savedpost.title, 
      tag:savedpost.title, 
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // This binding is necessary to make `this` work in the callback
  }

  componentDidMount() {
 

   
  }


  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })

  

  }

  handleSubmit(evt) {
    evt.preventDefault()

    let tagArray = this.state.tag.split(','); 
    let mapTolowercaseTags = tagArray.map(function(el) {let lowerCase = el.toLowerCase(); return lowerCase })
    
    let newPost = {
      imageUrl:this.state.imageUrl,
      title:this.state.title,
      content: this.state.content, 
      tag:mapTolowercaseTags , 
    }


    localStorage.removeItem('newpost');

    // savedpost = { imageUrl:"",
    // title: "",
    // content: "", 
    // tag:"", }

    this.props.addPostThunk(newPost)
  }

  
  handlePreview(evt) {
    evt.preventDefault()

    let tagArray = this.state.tag.split(','); 
    let mapTolowercaseTags = tagArray.map(function(el) {let lowerCase = el.toLowerCase(); return lowerCase })
    
    let newPost = {
      imageUrl:this.state.imageUrl,
      title:this.state.title,
      content: this.state.content, 
      tag:mapTolowercaseTags , 
    }

    localStorage.setItem('newpost',JSON.stringify(newPost))



    this.props.addPreviewPostThunk(newPost)
  }

  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }

  render() {

    let previewData = this.props.previewPost; 

  
    

    // if(window.localStorage.length){
    //   localStorage.getItem(newPost, 'newPost')
    // }

    console.log(previewData, 'addPreviewPostThunk')

    console.log(previewData)
    return (
      <React.Fragment>
      <div id='banner-blog-main'></div>
      <div className='add-post-container'>
        <div className='blog-post-title-add'><h1>Add Post</h1></div>
        <div>
        <form className="form-inputs ">
          <div className="blog-item-add">
            {/* <label>Image:</label> */}
            <input  type="text"
              name="imageUrl"
              value={this.state.imageUrl}
              onChange={this.handleChange} placeholder="picture"></input>
          </div>
          <div className="blog-item-add">
            {/* <label>Title:</label> */}
            <input type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}placeholder="title"></input>
          </div>
          <div className="blog-item-add">
            {/* <label>Title:</label> */}
            <input type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}  placeholder="tag"></input>
          </div>
          <div className="blog-item-add">
            {/* <label>Content:</label> */}
            <h5>{`Words: ${this.state.content.length}`}</h5>
            <textarea  id='add-content-textarea'type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleChange} 
    
              placeholder='content'
            ></textarea>
          </div>
          <div className="blog-item-add btn-add">
            <button onClick={evt => this.handleSubmit(evt)} type="submit">
              Add Post
            </button>
            <button onClick={evt => this.handlePreview(evt)} type="submit">
             
              <Link  style={{ textDecoration: 'none', color: 'black' }}to='/blog/postpreview'>Click here to show preview</Link>
            </button>
          </div>
        </form>

        </div>

      </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    blogReducer: state.blogReducer.blogposts,
    previewPost:state.blogReducer.previewPost 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPostThunk: (post) => dispatch(addPostThunk(post)),
    addPreviewPostThunk: (post) => dispatch(addPreviewPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogPost)
