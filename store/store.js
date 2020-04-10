import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import blogReducer from './blogReducer'
import languageReducer from './languageReducer'
import btnReducer from './btnReducer'



const reducer = combineReducers({blogReducer, languageReducer, btnReducer})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store