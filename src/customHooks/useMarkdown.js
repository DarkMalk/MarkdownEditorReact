import { useEffect } from 'react'
import { marked } from 'marked'
import { useSelector, useDispatch } from 'react-redux'
import { textChange } from '../redux/reducers/markdownReducer'

const useMarkdown = () => {
  const value = useSelector(state => state.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage) {
      const value = localStorage.getItem('Markdown')
      if (value) dispatch(textChange(JSON.parse(value)))
    }
  }, [])

  const markdown = marked.parse(value)
  return {
    text: value,
    markdown,
    setValue: value => {
      dispatch(textChange(value))
    }
  }
}

export default useMarkdown
