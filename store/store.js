import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import blogReducer from './blogReducer'
import languageReducer from './languageReducer'
import btnReducer from './btnReducer'
import userInteractionReducer from './userInteractionReducer'



const reducer = combineReducers({blogReducer, languageReducer, btnReducer, userInteractionReducer})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)
const store = createStore(reducer, middleware)

export default store


// createLogger({collapsed: true})