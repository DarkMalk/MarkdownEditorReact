const INITIAL_STATE = false
const changeView = '@views/change-view'

const viewsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === changeView) return !state
  return state
}

const actionChangeView = () => {
  return { type: changeView }
}

export { viewsReducer, actionChangeView }