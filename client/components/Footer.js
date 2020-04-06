import React from 'react'

export const Footer = props => {
  return (
    <React.Fragment>
      <footer id='footerID'className="container-uni">
        <div className="footer-media">
          <div className="col-4 ">
            {' '}
            <a href="#" className="fa">Linkedin </a>
          </div>
          <div className="col-4 ">
            {' '}
            <a
              href="https://www.linkedin.com/in/katarzyna-wegorek"
              className="fa"
            >Medium</a>
          </div>
          <div className="col-4 ">
            <a
              href="https://github.com/kwegorek"
              className="fa"
            >GitHub</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}
