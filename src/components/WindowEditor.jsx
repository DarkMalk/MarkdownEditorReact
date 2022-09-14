import React, { useState } from 'react'
import useFilename from '../customHooks/useFilename'
import EditorMonaco from './EditorMonaco'

const WindowEditor = () => {
  const [maxWidth, setMaxWidth] = useState(false)
  const { name, setName } = useFilename()

  return (
    <div className={`container-editor ${maxWidth ? 'maximize-window' : ''}`}>
      <div className='buttons-window'>
        <div className='input-name'>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Nombra tu archivo...' />
          <div>.md</div>
        </div>
        <button onClick={() => setMaxWidth(!maxWidth)} className='button-maximize'><i className='fa-solid fa-maximize' /></button>
      </div>
      <EditorMonaco />
    </div>
  )
}

export default WindowEditor