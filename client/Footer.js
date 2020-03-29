import React from 'react'

export const Footer = props => {
  return (
    <React.Fragment>
      <footer className="container-uni">
        <div className="row footer-media">
          <div className="col-4 ">
            {' '}
            <a href="#" className="fa fa-envelope"></a>
          </div>
          <div className="col-4 ">
            {' '}
            <a
              href="https://www.linkedin.com/in/katarzyna-wegorek"
              className="fa fa-linkedin-square"
            ></a>
          </div>
          <div className="col-4 ">
            <a
              href="https://github.com/kwegorek"
              className="fa fa-github-square"
            ></a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}
