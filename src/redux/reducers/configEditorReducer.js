import { getLocalStorage } from '../../helper/helper'

const getInitialState = getLocalStorage('config')

const INITIAL_STATE = getInitialState !== 'key incorrect'
  ? getInitialState
  : {
    lineNumbers: 'on',
    fontSize: 18,
    padding: { top: 10, bottom: 10 },
    minimap: { enabled: false },
    fontLigatures: true,
    fontFamily: 'JetBrains Mono',
    wordWrap: 'on',
    cursorStyle: 'line',
    cursorBlinking: 'expand',
    tabSize: 2,
    automaticLayout: true,
    smoothScrolling: true,
    theme: 'vs-dark'
  }


const change = '@config-editor/change'

const configEditorReducer = (state = INITIAL_STATE, action) => {
  if (action.type === change) {
    return Object.assign({}, state, action.config)
  }
  return state
}

const configEditorChange = config => {
  return {
    type: change,
    config
  }
}

export { configEditorReducer, configEditorChange }
