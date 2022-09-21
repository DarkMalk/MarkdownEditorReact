import { useDispatch, useSelector } from 'react-redux'
import { actionChangeView } from '../redux/reducers/viewsReducer'

const useChangeView = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.viewEditor)
  
  return {
    changeView: state,
    setChangeView: () => dispatch(actionChangeView())
  }
}

export default useChangeView