const INITIAl_STATE = ''

const markdownReducer = (state = INITIAl_STATE, action) => {
  if (action.type === '@text/change') {
    const newValue = action.value
    return newValue
  }
  return state
}

const textChange = value => {
  return { type: '@text/change', value }
}

export { markdownReducer, textChange }
