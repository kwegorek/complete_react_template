import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from '../store/store'
import {Main} from './Main.js'
// import Routes from './routes.js'
import {Router, Route, Link, Switch} from 'react-router-dom'
import history from './history'
import PostLarge from './components/PostLarge'
import Navbar from './components/Navbar'
import {Footer} from './components/Footer'
import {About} from './components/About'
import {Projects} from './components/Projects'
import Blog from './components/Blog'
import ContactForm from './components/ContactForm'
import AddBlogPost from './components/AddBlogPost'
import PreviewPost from './components/PreviewPost'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="main-container">
        <Navbar/>
        <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Main} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/addpost" component={AddBlogPost} />
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/post/:id" component={PostLarge} />
        <Route exact path="/blog/postpreview" component={PreviewPost} />
     
        {/* <Route path="*" component={ErrorPage} /> */}
      </Switch>

      </div>
    </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
)
