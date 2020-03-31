import axios from 'axios'


const GET_BLOG_STATE = 'GET_BLOG_STATE'

/**
 * INITIAL STATE
 */
const initialState = []


/**
 * ACTION CREATORS
 */
export const getPosts = posts => ({
  type: GET_BLOG_STATE,
  posts
})

// * THUNK CREATORS
// */
export const gotPosts = () => async dispatch => {
    console.log( 'posts----------------------------')
 try {
   const data = await axios.get('/api/blogposts')
   console.log(data, '----')
//    dispatch(getPosts(data)); 
  
   return data
 } catch (err) {
   console.error(err)
 }
}

console.log('-----------')



/**
 * REDUCER
 */
export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOG_STATE:
      return {blogposts: action.posts}
    default:
        return state}
  }
//   Now you're ready to go, and the rest is up to you! 
//   Define the action types, action creators and sub-reducers 
//   that your redux app will use to calculate the state. 
//   Use the connect function from react-redux to 
//   obtain slices of state and the dispatch method throughout your app.