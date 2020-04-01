import React from 'react'
import PostLarge from './PostLarge'
import {BrowserRouter as Router, Switch, Route, Link, Redirect
} from 'react-router-dom'

export const Post = (props) => {
  let post = props.post
  let readMore = `/post/${post.id}`

  return (
  
      <div className=" row">
        <div className="col-4 blog-item">
          <img src='#' />
          <div>
            <h3>{post.title}</h3>
            <h5>
              Last edited:<span>{post.edited}</span>
            </h5>
            <p>{post.content}</p>
            <Link to={readMore} className="display-more">Read more</Link>
            {/* <Redirect to='\post\'></Redirect> */}
          </div>
        </div>
      </div>


  )
}
