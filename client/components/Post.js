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
      <div>
        <img className="blog-pic" src="./img/milky-way-2695569_640.jpg" />
      </div>

      <div className="blog-item-content">
        <div className='title-edited-container'>
        <h2 className='post-title'>{post.title}</h2>
        <h5 >
          Last edited: <span>{post.edited}</span>
        </h5>
        <h4>
          <Link to={readMore} className="display-more">
            Read more
          </Link>
        </h4>
        <div><p>{post.content}</p>
          </div>

        </div>
       

      </div>
    </div>
  )
}
