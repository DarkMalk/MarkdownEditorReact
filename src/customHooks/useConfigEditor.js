import { useDispatch, useSelector } from 'react-redux'
import { configEditorChange } from '../redux/reducers/configEditorReducer'

const useConfigEditor = () => {
  const config = useSelector(state => state.config)
  const dispatch = useDispatch()

  return {
    config,
    setConfig: config => dispatch(configEditorChange(config))
  }
}

export { useConfigEditor }
