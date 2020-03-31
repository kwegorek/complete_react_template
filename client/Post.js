import React from 'react'

export const Post = props => {
  return (
          <div className=" row">
            <div className="col-4 blog-item">
              <img src="./board.jpg" />
              <div>
                <h3>Title</h3>
                <p>hello hello</p>
                <a className="display-more">Read more</a>
              </div>
            </div>
          </div>
  )
}
