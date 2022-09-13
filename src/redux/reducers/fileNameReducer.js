const INITIAl_STATE = ''

const fileNameReducer = (state = INITIAl_STATE, action) => {
  if (action.type === '@filename/change') {
    const newValue = action.name
    return newValue
  }
  return state
}

const fileNameChange = (name) => {
  return {
    type: '@filename/change',
    name
  }
}

export { fileNameReducer, fileNameChange }