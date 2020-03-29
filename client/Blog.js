import React from 'react'

export const Blog = props => {
  return (
    <React.Fragment>
      <div id="blog" className="content-blog-container container-uni">
        <h1 id="blog-title">BLOG</h1>
        <div className="blog-grid">
          <div className=" row">
            <div className="col-4 blog-item">
              <img src="./board.jpg" />
              <div>
                <p>hello hello</p>
                <a className="display-more">Read more</a>
              </div>
            </div>
          </div>
          <div className=" row">
            <div className="col-4 blog-item">
              <img src="./board.jpg" />
              <div>
                <p>hello hello</p>
                <a className="display-more">Read more</a>
              </div>
            </div>
          </div>
          <div className=" row">
            <div className="col-4 blog-item">
              <img src="./board.jpg" />
              <div>
                <p>hello hello</p>
                <a className="display-more">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="#contact">
            <i id="last-caret" className="fa fa-caret-down"></i>
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}
