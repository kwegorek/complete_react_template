import axios from 'axios'

const GET_BTN_STATE = 'GET_BTN_STATE'
const CHANGE_PLBTN_STATE = 'CHANGE_PLBTN_STATE'
const CHANGE_DEBTN_STATE = 'CHANGE_DEBTN_STATE'
const CHANGE_ENBTN_STATE = 'CHANGE_ENBTN_STATE'


/**
 * INITIAL STATE
 */
const initialState = {btnPL: false, btnEN: true, btnDE: false}

/**
 * ACTION CREATORS
 */
export const getBtnState  = (btns) => ({
  type: GET_BTN_STATE,
  btns,
})

export const changePLBtnState = (btn) => ({
  type: CHANGE_PLBTN_STATE,
  btn,
})

export const changeENBtnState = (btn) => ({
    type: CHANGE_ENBTN_STATE,
    btn,
  })


  export const changeDEBtnState = (btn) => ({
    type: CHANGE_DEBTN_STATE,
    btn,
  })

// export const getDETranslation = (translation) => ({
//   type: GET_DE_TRANSLATION,
//   translation,
// })

// * THUNK CREATORS
// */
export const changePLBtn = (btnState) => async (dispatch) => {
  try {
 
    dispatch(changePLBtnState(btnState))

  } catch (err) {
    console.error(err)
  }
}



export const changeENBtn = (btnState) => async (dispatch) => {
    try {
   
      dispatch(changeENBtnState(btnState))
  
    } catch (err) {
      console.error(err)
    }
  }

  export const changeDEBtn = (btnState) => async (dispatch) => {
    try {
   
      dispatch(changeDEBtnState(btnState))
  
    } catch (err) {
      console.error(err)
    }
  }

/**
 * REDUCER
 */
export default function btnReducer(state = initialState, action) {
  switch (action.type) {
    // case GET_BTN_STATE:
    //   return {...state, btnsAll:action.btns}

    case CHANGE_PLBTN_STATE:
      return {...state, btnPL: action.btn}

    case CHANGE_ENBTN_STATE:
      return {...state, btnEN: action.btn}
      case CHANGE_DEBTN_STATE:
        //   console.log('action de btn', action.btn)
        return {...state, btnDE: action.btn}
  

    default:
      return state
  }
}
//   Now you're ready to go, and the rest is up to you!
//   Define the action types, action creators and sub-reducers
//   that your redux app will use to calculate the state.
//   Use the connect function from react-redux to
//   obtain slices of state and the dispatch method throughout your app.
