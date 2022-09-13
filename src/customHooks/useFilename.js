import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fileNameChange } from '../redux/reducers/fileNameReducer'

const useFilename = () => {
  const name = useSelector(state => state.filename)
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage) {
      const valueName = localStorage.getItem('filename')
      if (valueName) dispatch(fileNameChange(JSON.parse(valueName)))
    }
  }, [])

  return {
    name,
    setName: name => dispatch(fileNameChange(name))
  }
}

export default useFilename
