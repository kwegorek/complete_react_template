import React from 'react'
import {Link, withRouter} from 'react-router-dom'

export const GoBackHome = (props) => {
  return (
    <React.Fragment>
      <div className="about-backto-homepage">
        <Link style={{textDecoration: 'none', color: 'black'}} to="/home">
          GO BACK TO <br /> HOMEPAGE
        </Link>
      </div>
    </React.Fragment>
  )
}
