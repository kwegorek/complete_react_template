import axios from 'axios'


const GET_BLOG_STATE = 'GET_BLOG_STATE'
const ADD_POST = 'ADD_POST'
const ADD_PREVIEW_POST = 'ADD_PREVIEW_POST'
const GET_ONE_POST = 'GET_ONE__POST'


/**
 * INITIAL STATE
 */
const initialState = {blogposts:[], addedPosts:[], previewPost:[], onePost:[]}


/**
 * ACTION CREATORS
 */
export const getPosts = posts => ({
  type: GET_BLOG_STATE,
  posts
})


export const addPosts = posts => ({
  type: ADD_POST,
  posts
})


export const addPreviewPost = post => ({
  type: ADD_PREVIEW_POST,
  post
})

export const getOnePost = post => ({
  type: GET_ONE_POST,
  post
})

// * THUNK CREATORS
// */
export const gotPosts = () => async dispatch => {
    console.log( 'posts----------------------------')
 try {
   const {data} = await axios.get('/api/blogposts'); 
  //  console.log(data, 'data')
   dispatch(getPosts(data)); 
  
   return data
 } catch (err) {
   console.error(err)
 }
}

export const addPostThunk = (post) => async dispatch => {
  console.log( 'posts----------------------------')
try {
 const {data} = await axios.post('/api/blogposts', post); 
 console.log(data, 'data')
 dispatch(addPosts(data)); 

 return data
} catch (err) {
 console.error(err)
}
}


export const addPreviewPostThunk = (post) => async dispatch => {
  console.log( 'posts----------------------------')
try {
//  const {data} = await axios.post('/api/blogposts', post); 
//  console.log(data, 'data')
 dispatch(addPreviewPost(post)); 

//  return data
} catch (err) {
 console.error(err)
}
}


export const getOnePostThunk = (id) => async dispatch => {
  console.log( 'posts----------------------------')
try {
 const {data} = await axios.get('/api/blogposts', id); 

 dispatch(getOnePost(data)); 

//  return data
} catch (err) {
 console.error(err)
}
}


/**
 * REDUCER
 */
export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOG_STATE:
      return  {...state, blogposts: action.posts}
      case ADD_POST:
      return  {...state, addedPosts: action.posts}
      case ADD_PREVIEW_POST :
        return  {...state, previewPost: action.post}
        case GET_ONE_POST :
          return  {...state, onePost: action.post}
    default:
        return state}
  }
//   Now you're ready to go, and the rest is up to you! 
//   Define the action types, action creators and sub-reducers 
//   that your redux app will use to calculate the state. 
//   Use the connect function from react-redux to 
//   obtain slices of state and the dispatch method throughout your app.