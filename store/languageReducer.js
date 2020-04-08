import axios from 'axios'

const GET_PL_TRANSLATION = 'GET_PL_TRANSLATION'
const GET_EN_TRANSLATION = 'GET_EN_TRANSLATION'
const GET_DE_TRANSLATION = 'GET_DE_TRANSLATION'

/**
 * INITIAL STATE
 */
const initialState = {pltranslation: [], detranslation: [], entranslation: []}

/**
 * ACTION CREATORS
 */
export const getPLTranslation = (translation) => ({
  type: GET_PL_TRANSLATION,
  translation,
})

export const getENTranslation = (translation) => ({
  type: GET_EN_TRANSLATION,
  translation,
})

export const getDETranslation = (translation) => ({
  type: GET_DE_TRANSLATION,
  translation,
})

// * THUNK CREATORS
// */
export const gotPLTranslation = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/pltranslation')

    dispatch(getPLTranslation(data))

    return data
  } catch (err) {
    console.error(err)
  }
}

export const gotENTranslation = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/entranslation')

    dispatch(getENTranslation(data))

    return data
  } catch (err) {
    console.error(err)
  }
}

export const gotDETranslation = () => async (dispatch) => {
  console.log('posts----------------------------')
  try {
    const {data} = await axios.get('/api/detranslation')
    //  console.log(data, 'data')
    dispatch(getDETranslation(data))

    return data
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PL_TRANSLATION:
      return {...state, translationPL: action.translation}

    case GET_EN_TRANSLATION:
      return {...state, translationPL: action.translation}

    case GET_DE_TRANSLATION:
      return {...state, translationPL: action.translation}

    default:
      return state
  }
}
//   Now you're ready to go, and the rest is up to you!
//   Define the action types, action creators and sub-reducers
//   that your redux app will use to calculate the state.
//   Use the connect function from react-redux to
//   obtain slices of state and the dispatch method throughout your app.
