import React from 'react'
import {NavLink} from 'react-router-dom'

import {Post} from './Post'
import {connect} from 'react-redux'
import {gotPosts, getOnePostThunk} from '../../store/blogReducer'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount(){

    this.props.gotPosts()

  }

  render() {
    let post = true
    return (
      <React.Fragment>

     
      {post ? (
      <div>
      <header>
        <nav>
   
            <ul className='nav-container'>

            
          <NavLink style={{ textDecoration: 'none', color: 'black' }} className='nav-item navbar-home'to='/home' activeStyle={{backgrounud:'orange'}}>HOME</NavLink>

    
            <NavLink style={{ textDecoration: 'none', color: 'black' }} className='nav-item'to='/about' activeStyle={{backgrounud:'orange'}}>About</NavLink>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} className='nav-item'to='/projects' activeStyle={{backgrounud:'orange'}}>Projects</NavLink>
            <NavLink style={{ textDecoration: 'none',color: 'black'}} className='nav-item'to='/contact' activeStyle={{backgrounud:'orange'}}>Contact</NavLink>
            <NavLink  style={{ textDecoration: 'none', color: 'black' }}className='nav-item'to='/blog' activeStyle={{backgrounud:'orange'}}>Blog</NavLink>

            </ul>
           
        </nav>
      </header>
    </div>) : null}
    </React.Fragment>
      
        
    )
  }
}
const mapStateToProps = state => {
  return {
    blogReducer: state.blogReducer.blogposts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gotPosts: () => dispatch(gotPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)




