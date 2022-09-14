import React from 'react'
import Editor from '@monaco-editor/react'
import useMarkdown from '../customHooks/useMarkdown'
import { useConfigEditor } from '../customHooks/useConfigEditor'

const EditorMonaco = () => {
  const { text, setValue } = useMarkdown()
  const { config } = useConfigEditor()
  const { theme, ...restOfConfig } = config

  return (
    <Editor
      value={text}
      language='markdown'
      theme={theme}
      options={restOfConfig}
      onChange={value => setValue(value)}
      className='editor'
    />
  )
}

export default EditorMonaco