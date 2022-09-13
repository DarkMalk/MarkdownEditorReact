import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import useMarkdown from '../customHooks/useMarkdown'
import useFilename from '../customHooks/useFilename'

const optionsEditor = {
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
  smoothScrolling: true
}

const WindowEditor = () => {
  const [maxWidth, setMaxWidth] = useState(false)
  const { text, setValue } = useMarkdown()
  const { setName, name } = useFilename()

  return (
    <div className={`container-editor ${maxWidth ? 'maximize-window' : ''}`}>
      <div className='buttons-window'>
        <div className='input-name'>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Nombra tu archivo...' />
          <div>.md</div>
        </div>
        <button onClick={() => setMaxWidth(!maxWidth)} className='button-maximize'><i className='fa-solid fa-maximize' /></button>
      </div>
      <Editor
        theme='vs-dark'
        value={text}
        language='markdown'
        options={optionsEditor}
        className='editor'
        onChange={(value) => setValue(value)} />
    </div>
  )
}

export default WindowEditor