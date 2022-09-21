import React, { useState } from 'react'
import EditorMonaco from './EditorMonaco'
import useFilename from '../customHooks/useFilename'
import useChangeView from '../customHooks/useChangeView'

const WindowEditor = () => {
  const [maxWidth, setMaxWidth] = useState(false)
  const { name, setName } = useFilename()
  const { setChangeView } = useChangeView()

  return (
    <div className={`container-editor ${maxWidth ? 'maximize-window' : ''}`}>
      <div className='buttons-window'>
        <div className='button-mobile'>
          <button onClick={setChangeView}>Toggle preview</button>
        </div>
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