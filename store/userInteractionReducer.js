import axios from 'axios'


const GET_INTERACTIONS = 'GET_INTERACTIONS'
const UPDATE_LIKE = 'UPDATE_LIKE'
// const ADD_PREVIEW_POST = 'ADD_PREVIEW_POST'
// const GET_ONE_POST = 'GET_ONE__POST'


/**
 * INITIAL STATE
 */
const initialState = {alllikes:[], currentLikesNumber:0}


/**
 * ACTION CREATORS
 */
export const getInteraction = likes => ({
  type: GET_INTERACTIONS,
  likes
})


export const updateLike =  num => ({
  type: UPDATE_LIKE,
  num
})



// * THUNK CREATORS
// */
export const gotInteractions = () => async dispatch => {
   
 try {
   const {data} = await axios.get('/api/userinteractions'); 
   dispatch(getInteraction(data)); 
  
   return data
 } catch (err) {
   console.error(err)
 }
}

export const addLikeThunk = (obj) => async dispatch => {

    console.log(obj, 'addLikeThunk Value ---------------------------------------------------------->')

try {
 

 const {data} = await axios.put('/api/userinteractions', obj); 
 console.log(data, 'addLikeThunk data --------------->>>><<<<')

 dispatch(updateLike(data)); 

 return data
} catch (err) {
 console.error(err)
}
}


/**
 * REDUCER
 */
export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INTERACTIONS:
      return  {...state, alllikes: action.likes}
      case UPDATE_LIKE:
          let curObj = action.num;
 
        const likesWithoUpdate = state.alllikes.map(el => {el.likes = curObj.likes})

        console.log('element to update update link =====================+>', likesWithoUpdate)

    return {...state, currentLikesState: likesWithoUpdate, currentLikesNumber: curObj.likes}
    default:
        return state}
  }
//   Now you're ready to go, and the rest is up to you! 
//   Define the action types, action creators and sub-reducers 
//   that your redux app will use to calculate the state. 
//   Use the connect function from react-redux to 
//   obtain slices of state and the dispatch method throughout your app.