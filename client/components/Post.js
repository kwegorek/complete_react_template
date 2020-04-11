import React from 'react'
import PostLarge from './PostLarge'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

export const Post = (props) => {
  let post = props.post
  let readMore = `/post/${post.id}`

  return (
    <div id="blog-item-id" className="col-4 blog-item ">
    <div className='banner-blog'></div>

      <div className="blog-item-content">
        <div className='title-edited-container'>
        <h2 className='post-title'>{post.title}</h2>
        <div className='post-love-comment-views-container'>
          <div className='post-love-comment-views-item'><a>LOVE</a></div>
          <div className='post-love-comment-views-item'><a>LOVE</a></div>
          <div className='post-love-comment-views-item'><a>LOVE</a></div>
        </div>

        </div>
       

      </div>
    </div>
  )
}
