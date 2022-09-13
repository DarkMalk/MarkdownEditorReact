import { legacy_createStore, combineReducers } from 'redux'
import { markdownReducer } from './reducers/markdownReducer'
import { fileNameReducer } from './reducers/fileNameReducer'

const rootReducers = combineReducers({
  value: markdownReducer,
  filename: fileNameReducer
})

const store = legacy_createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
