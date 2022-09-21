import { legacy_createStore, combineReducers } from 'redux'
import { markdownReducer } from './reducers/markdownReducer'
import { fileNameReducer } from './reducers/fileNameReducer'
import { configEditorReducer } from './reducers/configEditorReducer'
import { viewsReducer } from './reducers/viewsReducer'

const rootReducers = combineReducers({
  value: markdownReducer,
  filename: fileNameReducer,
  config: configEditorReducer,
  viewEditor: viewsReducer
})

const store = legacy_createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store }
