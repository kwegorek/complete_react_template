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
  console.log(post)

  return (
    <div id="blog-item-id" className="col-4 blog-item ">
      <div className="banner-blog">
        <img className="banner-blog-img" src={post.imageUrl}></img>
      </div>

      <div className="blog-item-content">
        <div className="title-edited-container">
          <div className="title-container">
            <div className="title-container-item">
              {' '}
              <h2 className="post-title">
                {post.title}
                <span>
                  <Link to={readMore} className="display-more">
                    Read more
                  </Link>
                </span>
              </h2>
            </div>
          </div>

          <div className="post-love-comment-views-container">
            <div>
              <a>
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              <a>
                <i className="fa fa-comments" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              <a>
                <i className="fa fa-eye" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
